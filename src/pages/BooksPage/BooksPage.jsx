import { useEffect, useState } from "react";
import Aside from "../../components/ui/Aside/Aside";
import BookList from "../../components/ui/BookList/BookList";
import Container from "../../components/ui/Container/Container";
import s from "./BooksPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBookAllCategory, getBookWithCategory } from "../../store/books/booksSlice";

const BooksPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const bookCategory = useSelector((state) => state.books.bookCategory);
  const books = useSelector((state) => state.books.books);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    dispatch(getBookWithCategory());
    dispatch(getBookAllCategory());
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <div className={s.wrapper}>
        {bookCategory && windowWidth > 990 && <Aside list={bookCategory} title={"Kategoriyalar"} />}
        <BookList
          windowWidth={windowWidth}
          list={bookCategory}
          data={books}
          title="Kitoblar"
        />
      </div>
    </Container>
  );
};

export default BooksPage;

