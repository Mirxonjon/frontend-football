import AgesCategory from "../../components/ui/AgesCategory/AgesCategory";
import Category from "../../components/ui/Category/Category";
import Container from "../../components/ui/Container/Container";
import s from "./TrainingPage.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { getTreningCategory } from "../../store/trening/treningCategoriesSlice";
import { useEffect } from "react";
import { message } from "antd";
const TrainingPage = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const categories = useSelector(
    (state) => state.treningCategory.treningCategory
  );
  const loading = useSelector((state) => state.treningCategory.loading);
  const error = useSelector((state) => state.treningCategory.error);

  useEffect(() => {
    if (error?.message?.length) {
      messageApi.info(error.message);
    }
  }, [error]);
  useEffect(() => {
    dispatch(getTreningCategory());
  }, []);
  console.log(categories);
  return (
    <Container>
      <div className={s.wrapper}>
        <AgesCategory />

        {loading && <p>Loading...</p>}
        {contextHolder}
        {categories && <Category category={categories} />}
      </div>
    </Container>
  );
};

export default TrainingPage;

