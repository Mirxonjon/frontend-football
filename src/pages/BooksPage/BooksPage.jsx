import { useEffect, useState } from "react";
import Aside from "../../components/ui/Aside/Aside";
import BookList from "../../components/ui/BookList/BookList";
import Container from "../../components/ui/Container/Container";
import s from "./BooksPage.module.scss";
const books = [
  { id: 1, name: "Taktikaga oid kitoblar" },
  { id: 2, name: "Taktikaga oid kitoblar" },
  { id: 3, name: "Taktikaga oid kitoblar" },
  { id: 4, name: "Taktikaga oid kitoblar" },
  { id: 5, name: "Taktikaga oid kitoblar" },
  { id: 6, name: "Taktikaga oid kitoblar" },
  { id: 7, name: "Taktikaga oid kitoblar" },
  { id: 8, name: "Taktikaga oid kitoblar" },
  { id: 9, name: "Taktikaga oid kitoblar" },
  { id: 10, name: "Taktikaga oid kitoblar" },
];

const data = [
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
const BooksPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <div className={s.wrapper}>
        {windowWidth > 990 && <Aside list={books} title={"Kategoriyalar"} />}
        <BookList windowWidth={windowWidth} list={books} data={data} title="Kitoblar" />
      </div>
    </Container>
  );
};

export default BooksPage;

