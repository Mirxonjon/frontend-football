import Container from "../../components/ui/Container/Container";
import TrenersList from "../../components/ui/TrenersList/TrenersList";
import s from "./MasterclassSinglePage.module.scss";
import bg from "./../../assets/img/bg.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getMasterclassAllCategory,
  getMasterclassVideos,
} from "../../store/masterclass/masterclassSlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../../components/ui/404/404";
import { Select } from "antd";
const MasterclassSinglePage = () => {
  const { id } = useParams();
  const navigatio = useNavigate();
  const dispatch = useDispatch();
  const singleMasterclassCategory = useSelector(
    (state) => state.masterclass.masterclassVideos?.[0]
  );
  const loading_videos = useSelector(
    (state) => state.masterclass.loading_videos
  );

  const singleMasterclass = useSelector(
    (state) => state.masterclass.masterclassVideos?.[0]?.MasterclassVideos?.[0]
  );
  const allCategory = useSelector(
    (state) => state.masterclass.masterclassAllCategory
  );
  useEffect(() => {
    dispatch(getMasterclassAllCategory());
    dispatch(getMasterclassVideos(id));
  }, [id]);
  if (loading_videos) {
    return (
      <h1 style={{ padding: "20px 0", textAlign: "center" }}>Loading ...</h1>
    );
  }
  return (
    <div className={s.wrapper}>
      {singleMasterclassCategory ? (
        <div className={s.top}>
          <div className={s.img}>
            <img
              src={
                singleMasterclassCategory
                  ? "https://storage.googleapis.com/telecom2003/" +
                    singleMasterclassCategory.img_link
                  : bg
              }
              alt="trener"
            />
          </div>

          <Container>
            <h3 className={s.top_role}>Masterclass</h3>
            <h5 className={s.top_name}>{singleMasterclassCategory.title}</h5>
          </Container>
        </div>
      ) : (
        ""
      )}
      <Container>
        <div className={s.row}>
          {allCategory.length > 0 && (
            <Select
              className={s.select}
              defaultValue={id}
              onChange={(selectedValue) => {
                navigatio('/masterclass/'+selectedValue);
              }}
              options={allCategory.map((el) => ({
                value: el.id,
                label: el.title,
              }))}
            />
          )}
          {singleMasterclass ? (
            <div className={s.left}>
              <div className={s.info}>
                <h2 className={s.title}>{singleMasterclass.title}</h2>
                <h4 className={s.sub_title}>
                  {singleMasterclass.description_title}
                </h4>
                <p className={s.descr}>
                  {singleMasterclass.description_tactic}
                </p>
              </div>
              <div className={s.img_plan}>
                <img
                  src={
                    "https://storage.googleapis.com/telecom2003/" +
                    singleMasterclass.tactic_img
                  }
                  alt="plan"
                />
              </div>
            </div>
          ) : (
            <NotFound
              style={{
                maxWidth: "50%",
                margin: "0 auto",
                padding: "100px 0px",
              }}
            />
          )}
          <div className={s.right}>
            <TrenersList data={allCategory} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MasterclassSinglePage;

