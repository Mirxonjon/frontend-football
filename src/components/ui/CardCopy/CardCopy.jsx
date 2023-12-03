import { Link } from "react-router-dom";
import s from "./CardCopy.module.scss";
import imgBook from "./../../../assets/img/bookFrame.png";
import MyButton from "../MyButton/MyButton";

const CardCopy = ({ data, withOutBtn }) => {
  return (
    <Link to={"/copies/" + data.id} className={s.item}>
      <div className={s.img}>
        <img
          src={
            data?.short_book_img
              ? "https://storage.googleapis.com/telecom2003/" + data?.short_book_img
              : imgBook
          }
          alt={"book"}
        />
      </div>
      <div className={s.name}>{data.title}</div>
      <div className={s.price}>
        {data.short_book_lang == "ru" ? "Ruscha" : "O`zbekcha"}
      </div>
      {!withOutBtn && <MyButton>Ko`rish</MyButton>}
    </Link>
  );
};

export default CardCopy;

