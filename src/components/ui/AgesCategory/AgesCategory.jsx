import s from "./AgesCategory.module.scss";
import img from "./../../../assets/img/age2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getTreningCategoryWithAge,
  treningCategoryActions,
} from "../../../store/trening/treningCategoriesSlice";

const ages = [
  { id: 1, value: "5-8", name: { uz: "5-8 yoshdagilar", ru: "5-8 летним" } },
  { id: 2, value: "9-13", name: { uz: "9-13 yoshdagilar", ru: "9-13 летним" } },
  { id: 3, value: "14-17", name: { uz: "14-17 yoshdagilar", ru: "14-17 летним" } },
  { id: 4, value: "18-21", name: { uz: "18-21 yoshdagilar", ru: "18-21 летним" } },
];

const AgesCategory = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);

  const getLocalizedText = (content) => {
    return content && content[lang] ? content[lang] : content;
  };


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
            {/* Используйте getLocalizedText для отображения правильного перевода в зависимости от языка */}
            <span>{getLocalizedText(age.name)}</span>
          </div>
        ))}
    </div>
  );
};

export default AgesCategory;
