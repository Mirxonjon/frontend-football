import s from "./Category.module.scss";
import img from "./../../../assets/img/category.png";
import Pagination from "../Pagination/Pagination";
import cs from "classnames";

const category = [
  { id: 1, name: "Texnikani rivojlantirish" },
  { id: 2, name: "Texnikani rivojlantirish" },
  { id: 3, name: "Texnikani rivojlantirish" },
  { id: 4, name: "Texnikani rivojlantirish" },
  { id: 5, name: "Texnikani rivojlantirish" },
  { id: 6, name: "Texnikani rivojlantirish" },
  { id: 7, name: "Texnikani rivojlantirish" },
  { id: 8, name: "Texnikani rivojlantirish" },
  { id: 9, name: "Texnikani rivojlantirish" },
  { id: 10, name: "Texnikani rivojlantirish" },
];
const Category = ({isLeft}) => {
  return (
    <div className={s.wrapper}>
      <h2 className={cs(s.title, isLeft ? s.title_left : "")}>Barcha Kategoriyalar</h2>
      <div className={cs(s.row, isLeft ? s.left : "")}>
        {category.length &&
          category.map((c) => (
            <div key={c.id} className={s.category}>
              <img src={img} alt={"category"} />
              <div className={s.name}>{c.name}</div>
            </div>
          ))}
      </div>
      
      <Pagination />
    </div>
  );
};

export default Category;

