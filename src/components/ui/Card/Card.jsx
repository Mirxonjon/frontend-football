import { Link } from "react-router-dom";
import s from "./Card.module.scss";
import imgBook from "./../../../assets/img/bookFrame.png";
import MyButton from "../MyButton/MyButton";
import { useLocalizedText } from "../../../hook/useLocalizedText";

const Card = ({ data, withOutBtn }) => {
  const changaLang = useLocalizedText();

  const content = {
    view: "Ko`rish",
    view_ru: "Смотреть",
    ru: "Ruscha",
    ru_ru: "Русский",
    uz: "O`zbekcha",
    uz_ru: "Узбекский",
  };
  return (
    <Link to={"/books/" + data.id} className={s.item}>
      <div className={s.img}>
        <img
          src={
            data?.book_img
              ? "https://storage.googleapis.com/telecom2003/" + data?.book_img
              : imgBook
          }
          alt={"book"}
        />
      </div>
      <div className={s.name}>{data[changaLang("title")]}</div>
      <div className={s.price}>
        {data.book_lang == "ru"
          ? content[changaLang("ru")]
          : content[changaLang("uz")]}
      </div>
      {!withOutBtn && <MyButton>{content[changaLang("view")]}</MyButton>}
    </Link>
  );
};

export default Card;

