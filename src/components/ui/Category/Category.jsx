import s from "./Category.module.scss";
import Pagination from "../Pagination/Pagination";
import cs from "classnames";
import { Link } from "react-router-dom";

const Category = ({ isLeft, category }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={cs(s.title, isLeft ? s.title_left : "")}>
        Barcha Kategoriyalar
      </h2>
      <div className={cs(s.row, isLeft ? s.left : "")}>
        {category.length &&
          category.map((c) => (
            <Link to={c.id} key={c.id} className={s.category}>
              <div className={s.img}>
                <img
                  src={"https://storage.googleapis.com/telecom2003/" + c.image}
                  height={"200px"}
                  alt={"category"}
                />
              </div>
              <div className={s.name}>{c.title}</div>
            </Link>
          ))}
      </div>

      <Pagination />
    </div>
  );
};

export default Category;

