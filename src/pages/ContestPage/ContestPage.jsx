import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/ui/Container/Container";
import ContestList from "../../components/ui/ContestList/ContestList";
// import SaidbarCategories from "../../components/ui/SaidbarCategories/SaidbarCategories";
import s from "./ContestPage.module.scss";
import { useEffect } from "react";
import { getCompetitionCategory } from "../../store/competion/competitionCatSlice";

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
      <div className={s.wrapper}>
        <ContestList category={competition} isLeft={true} />
        {/* <SaidbarCategories title={"Taktika toifalari"} /> */}
      </div>
    </Container>
  );
};

export default ContestPage;

