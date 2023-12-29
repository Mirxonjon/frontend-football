import AgesCategory from "../../components/ui/AgesCategory/AgesCategory";
import Category from "../../components/ui/Category/Category";
import Container from "../../components/ui/Container/Container";
import s from "./TrainingPage.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { getTreningCategory } from "../../store/trening/treningCategoriesSlice";
import { useEffect } from "react";
import { message } from "antd";
import NotFound from "../../components/ui/404/404";
import { Helmet } from "react-helmet-async";
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
  return (
    <Container>

    <Helmet>
        <title > CoachingZona Mashg‘ulotlar</title>
        <meta name="description" content="Mashg‘ulotlar bo'limi Murabbiylar uchun Coachingzone futbol kurslar bo'limi Учебный отдел  Футбольные курсы" />
        <link rel='canonical' href='http://localhost:5173/training' />
      </Helmet>
      <div className={s.wrapper}>
        <AgesCategory />

        {loading && <p>Loading...</p>}
        {contextHolder}
        {categories?.length ? <Category category={categories} /> : <NotFound subTitle={'not found category for this age'} />}
      </div>
    </Container>
  );
};

export default TrainingPage;

