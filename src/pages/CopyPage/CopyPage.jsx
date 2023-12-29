import { useEffect, useState } from "react";
import Container from "../../components/ui/Container/Container";
import s from "./CopyPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCopyAllCategory,
  getCopyWithCategory,
} from "../../store/copy/copiesSlice";
import AsideCopy from "../../components/ui/AsideCopy/AsideCopy";
import CopyList from "../../components/ui/CopyList/CopyList";
import { useLocalizedText } from "../../hook/useLocalizedText";
import { Helmet } from "react-helmet-async";

const CopyPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const changaLang = useLocalizedText();

  const copyCategory = useSelector((state) => state.copies.copyCategory);
  const copies = useSelector((state) => state.copies.copies);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    dispatch(getCopyWithCategory());
    dispatch(getCopyAllCategory());
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = {
    title: "Kitoblar",
    title_ru: "Книги",
    category: "Kategoriyalar",
    category_ru: "Категории",
  };

  return (
    <Container>
                <Helmet >
            <title> CoachingZona Konspektlar</title>
            <meta name="description" content="CoachingZona Konspektlar,Coaching Zona Konspektlar, CoachingZone Konspektlar  ,  Coaching Zone Konspektlar" />
            <link rel='canonical' href='https://coachingzona.uz/copies' />
          </Helmet>
      <div className={s.wrapper}>
        {copyCategory.length
          ? windowWidth > 990 && (
              <AsideCopy
                list={copyCategory}
                title={content[changaLang("category")]}
              />
            )
          : ""}
        <CopyList
          windowWidth={windowWidth}
          list={copyCategory}
          data={copies}
          title={content[changaLang("title")]}
        />
      </div>
    </Container>
  );
};

export default CopyPage;

