import { useParams } from "react-router-dom";
import s from "./BookSinglePage.module.scss";
import Card from "../../components/ui/Card/Card";
import Container from "../../components/ui/Container/Container";
import imgBook from "./../../assets/img/bookFrame.png";
import MyButton from "../../components/ui/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRecomendBooks,
  randomBooksActions,
  singleBook,
} from "../../store/books/randomBook";

const BookSinglePage = () => {
  const dispatch = useDispatch();
  const RandomBooks = useSelector((state) => state.randomBooks.recomendBooks);
  const book = useSelector((state) => state.randomBooks.singleBook);
  const { id } = useParams();
  const downloadFile = () => {
    const url = 'https://storage.googleapis.com/telecom2003/'+ book.book_link;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'your_file_name.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    dispatch(singleBook(id));
    if (RandomBooks?.length) {
      dispatch(randomBooksActions.getRandomBooks());
    } else {
      dispatch(getRecomendBooks())
        .unwrap()
        .then((result) => {
          dispatch(randomBooksActions.getRandomBooks(result));
        });
    }
  }, [id]);
  if(!book){
    return <h2 style={{textAlign:'center',fontSize:22,marginTop:50}}>Loading ...</h2>
  }
  return (
    <Container>
      <div className={s.wrapper}>
        <div className={s.main}>
          <div className={s.row}>
            <div className={s.img}>
              <img
                src={
                  book?.book_img
                    ? "https://storage.googleapis.com/telecom2003/" +
                      book?.book_img
                    : imgBook
                }
                alt="book"
              />
            </div>
            <div className={s.body}>
              <div className={s.name}>{book.title}</div>
              <div className={s.price}>
                {book.book_lang == "ru" ? "Ruscha" : "O`zbekcha"}
              </div>
              <div className={s.btn}>
                <MyButton onClick={downloadFile}>Yuklab olish</MyButton>
              </div>
            </div>
          </div>
          <div className={s.descrip}>
            <h2 className={s.descripTitle}>Mahsulot tavsifi</h2>
            <p>{book.description_book}</p>
          </div>
        </div>
        <aside className={s.aside}>
          <h2 className={s.titleRecomend}>Tavsiya etamiz</h2>
          <div className={s.list}>
            {RandomBooks?.length &&
              RandomBooks.map((book) => (
                <Card withOutBtn={true} key={book.id} data={book} />
              ))}
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default BookSinglePage;

