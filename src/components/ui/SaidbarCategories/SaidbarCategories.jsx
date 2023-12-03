import { Link, useParams } from "react-router-dom";
import s from "./SaidbarCategories.module.scss";
const SaidbarCategories = ({ title, list }) => {
  const { id } = useParams();
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>
        {list.length &&
          list.map((el) => (
            <Link
              to={"/contests/" + el.id}
              key={el.id}
              className={el.id === id ? s.active : ""}
            >
              {el.title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default SaidbarCategories;

