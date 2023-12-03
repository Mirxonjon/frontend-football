import { useDispatch, useSelector } from "react-redux";
import c from "./AsideCopy.module.scss";
import cs from "classnames";
import {
  copiesActions,
  getCopyWithCategory,
} from "../../../store/copy/copiesSlice";
const AsideCopy = ({ title, list }) => {
  const dispatch = useDispatch();

  const selectedCategoryId = useSelector(
    (state) => state.copies.selected_category
  );
  return (
    <div className={c.wrapper}>
      <div className={c.title}>{title}</div>
      {list?.length &&
        list.map((i) => (
          <button
            className={cs(c.item, selectedCategoryId === i.id ? c.active : "")}
            onClick={() => {
              dispatch(copiesActions.setSelectedCategory(i.id));
              dispatch(getCopyWithCategory());
            }}
            key={i.id}
          >
            {i.title}
          </button>
        ))}
    </div>
  );
};

export default AsideCopy;

