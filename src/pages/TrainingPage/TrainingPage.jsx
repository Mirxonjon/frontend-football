import AgesCategory from "../../components/ui/AgesCategory/AgesCategory";
import Category from "../../components/ui/Category/Category";
import Container from "../../components/ui/Container/Container";
import s from "./TrainingPage.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  getTreningCategory,
  getTreningCategoryWithAge,
} from "../../store/trening/treningCategoriesSlice";
import { useEffect, useState } from "react";
const TrainingPage = () => {
  const dispatch = useDispatch();
  const treners = useSelector((state) => state.treningCategory.treningCategory);
  const loading = useSelector((state) => state.treningCategory.loading);
  const error = useSelector((state) => state.treningCategory.error);
  const [age, setAge] = useState("5-8");

  function ChangeAge(value) {
    setAge(value);
    dispatch(getTreningCategoryWithAge(value));
  }
  useEffect(() => {
    dispatch(getTreningCategory());
  }, [dispatch]);
  return (
    <Container>
      <div className={s.wrapper}>
        <AgesCategory age={age} ChangeAge={ChangeAge} />

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {treners && <Category category={treners} />}
      </div>
    </Container>
  );
};

export default TrainingPage;

