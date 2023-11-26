import Container from "../../components/ui/Container/Container";
import s from "./TraningVideoPage.module.scss";
import img from "./../../assets/img/training.png";
import PlayList from "../../components/ui/PlayList/PlayList";
import TimeIcon from "../../components/svg/Tiime";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getTreningSubCatWithCateg,
  getVideoWithSubCat,
  treningSubCategoryActions,
} from "../../store/trening/treningSubCatSlice";
import { useParams } from "react-router-dom";
import { Select, message } from "antd";
const TraningVideoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const subCategories = useSelector(
    (state) => state.treningSubCategory.treningSubCategory
  );
  const selectedSubCat = useSelector(
    (state) => state.treningSubCategory.subCategory
  );
  const loading = useSelector((state) => state.treningSubCategory.loading);
  const error = useSelector((state) => state.treningSubCategory.error);
  const videos = useSelector((state) => state.treningSubCategory.videos);
  const loading_video = useSelector(
    (state) => state.treningSubCategory.loading_video
  );
  const error_video = useSelector(
    (state) => state.treningSubCategory.error_video
  );

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error?.message?.length) {
      messageApi.info(error.message);
    }

    if (error_video?.message?.length) {
      messageApi.info(error_video.message);
    }
  }, [error, error_video]);
console.log(videos);
  useEffect(() => {
    dispatch(getTreningSubCatWithCateg(id))
      .unwrap()
      .then((result) => {
        const currentSelectedSubCat = result.length > 0 ? result[0].id : null;
        if (currentSelectedSubCat) {
          dispatch(treningSubCategoryActions.setSubCat(currentSelectedSubCat));
          dispatch(getVideoWithSubCat());
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch, id]);
  return (
    <Container>
      <div className={s.row}>
        <div className={s.left}>
          <div className={s.video}>
            <video
              width="100%"
              height="auto"
              autoPlay
              playsInline
              muted
              loop
              controls
            >
              <source
                src="https://storage.googleapis.com/telecom2003/video_for_site.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={s.img}>
            <img src={img} alt="plan" />
          </div>
          <div className={s.description}>
            The principles of this corner kick are very much the same as the but
            in this variation the ball is served much closer to the end line.
            Again the goal is to force the defender that is marking the near
            side of the 18 box to vacate their space by sending in a player from
            the mid-field calling for the ball. Once this player vacates the
            space then a player from the bunch will make a run into the space.
          </div>
          <div className={s.post}>
            <h2 className={s.title}>Kurs haqida ma’lumot</h2>
            <div className={s.text}>
              The principles of this corner kick are very much the same as the
              but in this variation the ball is served much closer to the end
              line. Again the goal is to force the defender that is marking The
              principles of this corner kick are very much the same as the but
              in this variation the ball is served much closer to the end line.
              Again the goal is to force the defender that is marking
            </div>
          </div>
        </div>
        <div className={s.right}>
          {loading && <p>Loading...</p>}
          {contextHolder}
          {subCategories.length > 0 && (
            <Select
              className={s.select}
              defaultValue={selectedSubCat}
              onChange={(selectedValue) => {
                dispatch(treningSubCategoryActions.setSubCat(selectedValue));
                dispatch(getVideoWithSubCat());
              }}
              options={subCategories.map((el) => ({
                value: el.id,
                label: el.title,
              }))}
            />
          )}

          {loading_video && <p>Loading...</p>}
          {videos.length > 0 && (
            <PlayList videos={videos} title="Mashg‘ulotlar video to‘plami" />
          )}
          <div className={s.time}>
            <div className={s.row_time}>
              <TimeIcon />
              <div className={s.label}>Soati</div>
              <div className={s.value}>15:25</div>
            </div>
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

