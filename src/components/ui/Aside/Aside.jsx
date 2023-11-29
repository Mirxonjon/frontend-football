import { useDispatch, useSelector } from "react-redux";
import c from "./Aside.module.scss";
import cs from "classnames";
import {
  booksActions,
  getBookWithCategory,
} from "../../../store/books/booksSlice";
const Aside = ({ title, list }) => {
  const dispatch = useDispatch();

  const selectedCategoryId = useSelector(
    (state) => state.books.selected_category
  );

  return (
    <div className={c.wrapper}>
      <div className={c.title}>{title}</div>
      {list?.length &&
        list.map((i) => (
          <button
            className={cs(c.item, selectedCategoryId === i.id ? c.active : "")}
            onClick={() => {
              dispatch(booksActions.setSelectedCategory(i.id));
              dispatch(getBookWithCategory());
            }}
            key={i.id}
          >
            {i.title}
          </button>
        ))}
    </div>
  );
};

export default Aside;

