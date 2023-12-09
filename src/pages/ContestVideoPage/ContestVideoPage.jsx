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
import { useLocalizedText } from "../../hook/useLocalizedText";
import YouTube from "react-youtube";
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

  const changaLang = useLocalizedText();
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

  const content = {
    error: "Bu categoriya uchun video topilmadi",
    error_ru: "Для этой категории видео не найдено",
    title: "Taktika toifalari",
    title_ru: "Категории тактики",
  };

  return (
    <Container>
      <div className={s.row}>
        {selectedVideo?.video_link?.slice(0, 4) === "http" ? (
          <div className={s.left}>
            <div className={s.video}>
              <YouTube
                style={{ height: "100%", width: '100%' }}
                videoId={selectedVideo?.video_link?.split("v=")[1]}
              />
            </div>
            <div className={s.description}>
              {selectedVideo
                ? selectedVideo[changaLang("description_video")]
                : ""}
            </div>
          </div>
        ) : (
          <div className={s.notFound}>
            <NotFound subTitle={content[changaLang("error")]} />
          </div>
        )}
        <div className={s.right}>
          {windowWidth >= 991 && competitionAllCategory && (
            <SaidbarCategories
              list={competitionAllCategory}
              title={content[changaLang("title")]}
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
                label: el[changaLang("title")],
              }))}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContestVideoPage;

