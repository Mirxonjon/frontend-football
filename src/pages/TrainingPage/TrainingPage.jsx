import AgesCategory from "../../components/ui/AgesCategory/AgesCategory";
import Category from "../../components/ui/Category/Category";
import Container from "../../components/ui/Container/Container";
import s from "./TrainingPage.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  getTreningCategory,
} from "../../store/trening/treningCategoriesSlice";
import { useEffect } from "react";
const TrainingPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.treningCategory.treningCategory
  );
  const loading = useSelector((state) => state.treningCategory.loading);
  const error = useSelector((state) => state.treningCategory.error);


  useEffect(() => {
    dispatch(getTreningCategory());
  }, []);
  console.log(categories);
  return (
    <Container>
      <div className={s.wrapper}>
        <AgesCategory />

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {categories && <Category category={categories} />}
      </div>
    </Container>
  );
};

export default TrainingPage;

