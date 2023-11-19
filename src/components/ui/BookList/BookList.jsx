import MyButton from "../MyButton/MyButton";
import c from "./BookList.module.scss";
import imgBook from "./../../../assets/img/bookFrame.png";
const BookList = ({ title, data }) => {
  return (
    <div className={c.wrapper}>
      <div className={c.title}>{title}</div>
      <div className={c.list}>
        {data?.length &&
          data.map((el) => (
            <div className={c.item} key={el.id}>
              <div className={c.img}>
                <img src={el?.img ? el?.img : imgBook} alt={"book"} />
              </div>
              <div className={c.name}>{el.name}</div>
              <div className={c.price}>{el.price} so‘m</div>
              <MyButton>Sotib olish</MyButton>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookList;

