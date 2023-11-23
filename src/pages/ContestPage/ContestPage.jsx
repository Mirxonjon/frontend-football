import Category from "../../components/ui/Category/Category";
import Container from "../../components/ui/Container/Container";
import SaidbarCategories from "../../components/ui/SaidbarCategories/SaidbarCategories";
import s from "./ContestPage.module.scss";

const ContestPage = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <Category isLeft={true} />
        <SaidbarCategories title={"Taktika toifalari"} />
      </div>
    </Container>
  );
};

export default ContestPage;

