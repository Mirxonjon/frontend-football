import AgesCategory from "../../components/ui/AgesCategory/AgesCategory";
import Container from "../../components/ui/Container/Container";
import s from "./individualTrainingPage.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { getTreningCategory } from "../../store/trening/treningCategoriesSlice";
import { useEffect } from "react";
import { message } from "antd";
import NotFound from "../../components/ui/404/404";
import { Helmet } from "react-helmet-async";
import TacticCategory from "../../components/ui/TacticCategory/TacticCategory";
import {  getIndIvidualTreningCategory } from "../../store/individualTraining/IndividualTreningCategoriesSlice";
import IndividualTrainingCategory from "../../components/ui/individualTrainingCategory/individualTrainingCategory";
const IndividualTrainingPage = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const categories = useSelector(
    (state) => state.individualTreningCategory.individualtreningCategorys
  );
  console.log(categories , 'sasss');
  const loading = useSelector((state) => state.individualTreningCategory.loading);
  const error = useSelector((state) => state.individualTreningCategory.error);

  useEffect(() => {
    if (error?.message?.length) {
      messageApi.info(error.message);
    }
  }, [error]);
  useEffect(() => {
    dispatch(getIndIvidualTreningCategory());
  }, []);
  return (
    <Container>

    <Helmet>
        <title > CoachingZona Mashg‘ulotlar</title>
        <meta name="description" content="Mashg‘ulotlar bo'limi Murabbiylar uchun Coachingzone futbol kurslar bo'limi Учебный отдел  Футбольные курсы" />
        <link rel='canonical' href='https://coachingzona.uz/individualtraining' />
      </Helmet>
      <div className={s.wrapper}>
        {/* <AgesCategory /> */}
        <TacticCategory />
        {loading && <p>Loading...</p>}
        {contextHolder}
        {categories?.length ? <IndividualTrainingCategory category={categories} /> : <NotFound subTitle={'not found category for this age'} />}
      </div>
    </Container>
  );
};

export default IndividualTrainingPage;

