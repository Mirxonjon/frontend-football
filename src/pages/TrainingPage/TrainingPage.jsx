import AgesCategory from "../../components/ui/AgesCategory/AgesCategory";
import Category from "../../components/ui/Category/Category";
import Container from "../../components/ui/Container/Container";
import s from "./TrainingPage.module.scss";

const TrainingPage = () => {
  return (
    <Container>
      <AgesCategory />
      <Category />
    </Container>
  );
};

export default TrainingPage;

