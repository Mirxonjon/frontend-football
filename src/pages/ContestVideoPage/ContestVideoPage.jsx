import Container from "../../components/ui/Container/Container";
import s from "./ContestVideoPage.module.scss";
import SaidbarCategories from "../../components/ui/SaidbarCategories/SaidbarCategories";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompetitionCategory,
  getCompetitionVideos,
} from "../../store/competion/competitionCatSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../components/ui/404/404";
const ContestVideoPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const selectedVideo = useSelector(
    (state) => state.competition.competitionVideos?.Tactic_videos
  );
  const categories = useSelector(
    (state) => state.competition.competitionCategory
  );
  useEffect(() => {
    dispatch(getCompetitionVideos(params.id));
  }, [params.id]);
  useEffect(() => {
    if (categories.length < 1) {
      dispatch(getCompetitionCategory());
    }
  }, [categories]);
  return (
    <Container>
      <div className={s.row}>
        {selectedVideo ? (
          <div className={s.left}>
            <div className={s.video}>
              <iframe
                width="100%"
                height={"320"}
                src="https://www.youtube.com/embed/mDKfhL7iJT0?si=o85VWmKGFgEQFuXu"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className={s.description}>
              {selectedVideo && selectedVideo.description_video}
            </div>
          </div>
        ) : (
          <NotFound subTitle={'Bu categoriya uchun video topilmadi'} />
        )}
        <div className={s.right}>
          {categories && (
            <SaidbarCategories list={categories} title={"Taktika toifalari"} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContestVideoPage;

