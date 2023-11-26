import { useSelector } from "react-redux";
import Category from "../../components/ui/Category/Category";
import Container from "../../components/ui/Container/Container";
import ContestList from "../../components/ui/ContestList/ContestList";
import SaidbarCategories from "../../components/ui/SaidbarCategories/SaidbarCategories";
import s from "./ContestPage.module.scss";

const ContestPage = () => {
  const categories = useSelector(
    (state) => state.treningCategory.treningCategory
  );
  console.log(1111,categories);
  return (
    <Container>
      <div className={s.wrapper}>
        {/* <ContestList category={categories} isLeft={true} /> */}
        <SaidbarCategories title={"Taktika toifalari"} />
      </div>
    </Container>
  );
};

export default ContestPage;

