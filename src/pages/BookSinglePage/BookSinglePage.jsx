import { useParams } from "react-router-dom";
import s from "./BookSinglePage.module.scss";
import Card from "../../components/ui/Card/Card";
import Container from "../../components/ui/Container/Container";
import imgBook from "./../../assets/img/bookFrame.png";
import MyButton from "../../components/ui/MyButton/MyButton";

const books = [
  {
    id: 1,
    name: "Kitob nomi",
    price: "47200",
  },
  {
    id: 1,
    name: "Kitob nomi",
    price: "47200",
  },
];
const BookSinglePage = ({ data }) => {
  console.log(data);
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <div className={s.wrapper}>
        <div className={s.main}>
          <div className={s.row}>
            <div className={s.img}>
              <img src={imgBook} alt="book" />
            </div>
            <div className={s.body}>
              <div className={s.name}>Kitob nomi</div>
              <div className={s.price}>42 200 so‘m</div>
              <div className={s.btn}>
                <MyButton>Sotib olish</MyButton>
              </div>
            </div>
          </div>
          <div className={s.descrip}>
            <h2 className={s.descripTitle}>Mahsulot tavsifi</h2>
            <p>
              The principles of this corner kick are very much the same as the
              but in this variation the ball is served much closer to the end
              line. Again the goal is to force the defender that is marking
            </p>

            <p>
              The principles of this corner kick are very much the same as the
              but in this variation the ball is served much closer to the end
              line. Again the goal is to force the defender that is marking
            </p>
          </div>
        </div>
        <aside className={s.aside}>
          <h2 className={s.titleRecomend}>Tavsiya etamiz</h2>
          <div className={s.list}>
            {books.length &&
              books.map((book, index) => (
                <Card withOutBtn={true} key={book.id + index} data={book} />
              ))}
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default BookSinglePage;

