import { Link } from "react-router-dom";
import s from "./Card.module.scss";
import imgBook from "./../../../assets/img/bookFrame.png";
import MyButton from "../MyButton/MyButton";

const Card = ({ data, withOutBtn }) => {
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
      <div className={s.name}>{data.title}</div>
      <div className={s.price}>
        {data.book_lang == "ru" ? "Ruscha" : "O`zbekcha"}
      </div>
      {!withOutBtn && <MyButton>Ko`rish</MyButton>}
    </Link>
  );
};

export default Card;

