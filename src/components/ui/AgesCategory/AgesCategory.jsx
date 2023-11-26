import s from "./AgesCategory.module.scss";
import img from "./../../../assets/img/age2.png";
import { useDispatch } from "react-redux";
import {
  getTreningCategoryWithAge,
  treningCategoryActions,
} from "../../../store/trening/treningCategoriesSlice";
const ages = [
  { id: 1, value: "5-8", name: "5-8 yoshdagilar" },
  { id: 2, value: "9-13", name: "9-13 yoshdagilar" },
  { id: 3, value: "14-17", name: "14-17 yoshdagilar" },
  { id: 4, value: "18-21", name: "18-21 yoshdagilar" },
];
const AgesCategory = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.row}>
      {ages.length &&
        ages.map((age) => (
          <div
            onClick={() => {
              dispatch(
                treningCategoryActions.setPagination({ currentPage: 1 })
              );
              dispatch(treningCategoryActions.setAge(age.value));
              dispatch(getTreningCategoryWithAge());
            }}
            key={age.id}
            className={s.item}
          >
            <img src={img} alt={age.value} />
            <span>{age.name}</span>
          </div>
        ))}
    </div>
  );
};

export default AgesCategory;

