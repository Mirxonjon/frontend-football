import s from "./ContestList.module.scss";
import Pagination from "../Pagination/Pagination";
import cs from "classnames";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTreningCategoryWithAge,
  treningCategoryActions,
} from "../../../store/trening/treningCategoriesSlice";

const ContestList = ({ isLeft, category }) => {
  const dispatch = useDispatch();
  const paginationParams = useSelector(
    (state) => state.treningCategory.pagination
  );
  function setPaginationParams(paginationParams) {
    dispatch(treningCategoryActions.setPagination(paginationParams));
    dispatch(getTreningCategoryWithAge());
  }
  
  console.log(paginationParams);
  return (
    <div className={s.wrapper}>
      <h2 className={cs(s.title, isLeft ? s.title_left : "")}>
        Barcha Kategoriyalar
      </h2>
      <div className={cs(s.row, isLeft ? s.left : "")}>
        {category?.length &&
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

      <Pagination
        paginationParams={paginationParams}
        setPaginationParams={setPaginationParams}
      />
    </div>
  );
};

export default ContestList;
