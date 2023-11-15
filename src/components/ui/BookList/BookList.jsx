import MyButton from "../MyButton/MyButton";
import c from "./BookList.module.scss";

const BookList = ({ title, data }) => {
  return (
    <div className={c.list}>
      <div className={c.title}>{title}</div>
      {data?.length &&
        data.map((el) => (
          <div className={c.item} key={el.id}>
            <div className={c.img}>
              <img src={el.img} alt={"book"} />
              <div className={c.name}>{el.name}</div>
              <div className={c.price}>{el.price}</div>
              <MyButton>{el.price}</MyButton>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;

