import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/ui/Container/Container";
import ContestList from "../../components/ui/ContestList/ContestList";
// import SaidbarCategories from "../../components/ui/SaidbarCategories/SaidbarCategories";
import s from "./ContestPage.module.scss";
import { useEffect } from "react";
import { getCompetitionCategory } from "../../store/competion/competitionCatSlice";
import NotFound from "../../components/ui/404/404";
import { Helmet } from "react-helmet-async";

const ContestPage = () => {
  const dispatch = useDispatch();

  const competition = useSelector(
    (state) => state.competition.competitionCategory
  );
  useEffect(() => {
    dispatch(getCompetitionCategory());
  }, []);

  return (
    <Container>
      
      <Helmet>
        <title> CoachingZona Musobaqalar</title>
        <meta name="description" content="CoachingZona Musobaqalar ,Coaching Zona Musobaqalar , Yoshlar Musobaqalari  " />
        <link rel='canonical' href='https://coachingzona.uz/contests' />
      </Helmet>
      <div className={s.wrapper}>
        {competition?.length ? (
          <ContestList category={competition} isLeft={true} />
        ) : (
          <NotFound subTitle={"not found competitions"} />
        )}
        {/* <SaidbarCategories title={"Taktika toifalari"} /> */}
      </div>
    </Container>
  );
};

export default ContestPage;

