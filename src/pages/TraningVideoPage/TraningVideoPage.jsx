import Container from "../../components/ui/Container/Container";
import s from "./TraningVideoPage.module.scss";
import PlayList from "../../components/ui/PlayList/PlayList";
import TimeIcon from "../../components/svg/Tiime";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTreningSubCatWithCateg,
  getVideoWithSubCat,
  treningSubCategoryActions,
} from "../../store/trening/treningSubCatSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Select, message } from "antd";
import NotFound from "../../components/ui/404/404";
const TraningVideoPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const subCategories = useSelector(
    (state) => state.treningSubCategory.treningSubCategory
  );
  const selectedSubCat = useSelector(
    (state) => state.treningSubCategory.subCategory
  );
  const loading = useSelector((state) => state.treningSubCategory.loading);
  const error_video = useSelector(
    (state) => state.treningSubCategory.error_video
  );
  const videos = useSelector((state) => state.treningSubCategory.videos);
  const selectedCategory = useSelector(
    (state) => state.treningSubCategory.selectedCategory
  );
  const selected_video = useSelector(
    (state) => state.treningSubCategory.selected_video
  );
  const loading_video = useSelector(
    (state) => state.treningSubCategory.loading_video
  );

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error_video?.message?.length) {
      messageApi.info(error_video.message);
      if (error_video.status == 401) {
        navigate("/login");
      }
    }
  }, [error_video]);
  useEffect(() => {
    dispatch(getTreningSubCatWithCateg(params.id))
      .unwrap()
      .then((result) => {
        
        const currentSelectedSubCat =
          result.Training_sub_category.length > 0
            ? result.Training_sub_category[0].id
            : null;
        if (currentSelectedSubCat) {
          dispatch(treningSubCategoryActions.setSubCat(currentSelectedSubCat));
          dispatch(getVideoWithSubCat())
            .unwrap()
            .then((result) => {
              if (result.length > 0) {
                dispatch(treningSubCategoryActions.setSelectedVideo(result[0]));
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch, params]);
  if (selected_video)
   

  console.log(subCategories); 
  return (
    <Container>
      <div className={s.row}>
        <div className={s.left}>
          <div className={s.video}>
            {loading_video && <p>Loading...</p>}
            {selected_video ? (
              <video
                width="100%"
                height="auto"
                autoPlay
                playsInline
                muted
                loop
                controls
                src={
                  "https://storage.googleapis.com/telecom2003/" +
                  selected_video.video_link
                }
              />
            ): <NotFound style={{padding:50}} />}
          </div>
          <div className={s.img}>
            {selected_video && (
              <img
                src={
                  "https://storage.googleapis.com/telecom2003/" +
                  selected_video.tactic_img
                }
                alt="plan"
              />
            )}
          </div>
          <div className={s.description}>
            {selected_video && selected_video.description_tactic}
          </div>
          {selectedCategory && (
            <div className={s.post}>
              <h2 className={s.title}>Kurs haqida ma’lumot</h2>
              <div className={s.text}>
                {selectedCategory.description_training}
              </div>
            </div>
          )}
        </div>
        <div className={s.right}>
          {loading && <p>Loading...</p>}
          {subCategories.length > 0 && (
            <Select
              className={s.select}
              defaultValue={selectedSubCat}
              onChange={(selectedValue) => {
                dispatch(treningSubCategoryActions.setSubCat(selectedValue));
                dispatch(getVideoWithSubCat())
                  .unwrap()
                  .then((result) => {
                    if (result.length > 0) {
                      dispatch(
                        treningSubCategoryActions.setSelectedVideo(result[0])
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              options={subCategories.map((el) => ({
                value: el.id,
                label: el.title,
              }))}
            />
          )}

          {loading_video && <p>Loading...</p>}

          {contextHolder}
          {videos.length > 0 && (
            <PlayList videos={videos} title="Mashg‘ulotlar video to‘plami" />
          )}
          <div className={s.time}>
            <div className={s.row_time}>
              <TimeIcon />
              <div className={s.label}>Videodarsliklar soni</div>
              <div className={s.value}>{videos.length} ta</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TraningVideoPage;

