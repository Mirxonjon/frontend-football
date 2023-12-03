import Container from "../../components/ui/Container/Container";
import s from "./ContestVideoPage.module.scss";
import SaidbarCategories from "../../components/ui/SaidbarCategories/SaidbarCategories";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompetitionAllCategory,
  // getCompetitionCategory,
  getCompetitionVideos,
} from "../../store/competion/competitionCatSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../../components/ui/404/404";
import { Select } from "antd";
const ContestVideoPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const selectedVideo = useSelector(
    (state) => state.competition.competitionVideos?.Tactic_videos
  );
  const competitionAllCategory = useSelector(
    (state) => state.competition.competitionAllCategory
  );
  useEffect(() => {
    dispatch(getCompetitionVideos(params.id));
  }, [params.id]);
  useEffect(() => {
    dispatch(getCompetitionAllCategory());
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <div className={s.row}>
        {selectedVideo?.video_link?.slice(0, 4) === "http" ? (
          <div className={s.left}>
            <div className={s.video}>
              <iframe
                width="100%"
                height={"320"}
                src={selectedVideo.video_link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className={s.description}>
              {selectedVideo ? selectedVideo.description_video : ""}
            </div>
          </div>
        ) : (
          <div className={s.notFound}>
            <NotFound subTitle={"Bu categoriya uchun video topilmadi"} />
          </div>
        )}
        <div className={s.right}>
          {windowWidth >= 991 && competitionAllCategory && (
            <SaidbarCategories
              list={competitionAllCategory}
              title={"Taktika toifalari"}
            />
          )}
          {windowWidth < 991 && competitionAllCategory.length > 0 && (
            <Select
              className={s.select}
              defaultValue={params?.id}
              onChange={(selectedValue) => {
                navigate("/contests/" + selectedValue);
              }}
              options={competitionAllCategory.map((el) => ({
                value: el.id,
                label: el.title,
              }))}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContestVideoPage;

