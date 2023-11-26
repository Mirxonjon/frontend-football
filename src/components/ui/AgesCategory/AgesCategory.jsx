import s from "./AgesCategory.module.scss";
import img from "./../../../assets/img/age2.png";
import { useDispatch } from "react-redux";
import {
  getTreningCategoryWithAge,
  treningCategoryActions,
} from "../../../store/trening/treningCategoriesSlice";
const ages = [
  { id: 1, value: "5-8" },
  { id: 2, value: "9-13" },
  { id: 3, value: "14-17" },
  { id: 4, value: "18-21" },
];
const AgesCategory = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.row}>
      {ages.length &&
        ages.map((age) => (
          <div
            onClick={() => {
              dispatch(treningCategoryActions.setAge(age.value));
              dispatch(getTreningCategoryWithAge());
            }}
            key={age.id}
            className={s.item}
          >
            <img src={img} alt={age.value} />
            <span>{`U ${age.value} yoshdagilar`}</span>
          </div>
        ))}
    </div>
  );
};

export default AgesCategory;

