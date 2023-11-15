import Aside from "../../components/ui/Aside/Aside";
import BookList from "../../components/ui/BookList/BookList";
import Container from "../../components/ui/Container/Container";
import c from "./BooksPage.module.scss";
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
const BooksPage = () => {
  return (
    <Container>
      <div className={c.wrapper}>
        <Aside list={books} title={"Kategoriyalar"} />
        <BookList title="Kitoblar" />
      </div>
    </Container>
  );
};

export default BooksPage;

