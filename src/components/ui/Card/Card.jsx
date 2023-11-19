import { Link } from "react-router-dom";
import s from "./Card.module.scss";
import imgBook from "./../../../assets/img/bookFrame.png";
import MyButton from "../MyButton/MyButton";

const Card = ({ data, withOutBtn }) => {
  return (
    <Link to={"/books/" + data.id} className={s.item}>
      <div className={s.img}>
        <img src={data?.img ? data?.img : imgBook} alt={"book"} />
      </div>
      <div className={s.name}>{data.name}</div>
      <div className={s.price}>{data.price} so‘m</div>
      {!withOutBtn && <MyButton>Sotib olish</MyButton>}
    </Link>
  );
};

export default Card;

