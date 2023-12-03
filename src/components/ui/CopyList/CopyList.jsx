import s from "./CopyList.module.scss";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  copiesActions,
  getCopyWithCategory
} from "../../../store/copy/copiesSlice";
import { Select } from "antd";
import NotFound from "../404/404";
import CardCopy from "../CardCopy/CardCopy";
const CopyList = ({ title, list, data, windowWidth }) => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.copies.pagination);
  const loading_copies = useSelector((state) => state.copies.loading_copies);
  const search = useSelector((state) => state.copies.search);
  const handleSelect = (value) => {
    dispatch(copiesActions.setSelectedCategory(value));
    dispatch(getCopyWithCategory());
  };

  function setPaginationParams(paginationParams) {
    dispatch(copiesActions.setPagination(paginationParams));
    dispatch(getCopyWithCategory());
  }

  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={s.title}>{title}</div>
        {list.length > 0 && windowWidth <= 990 && (
          <div className={s.select}>
            <Select
              className={s.select}
              defaultValue={list[0].id}
              onChange={handleSelect}
              options={list.map((el) => ({
                value: el.id,
                label: el.title,
              }))}
            />
          </div>
        )}
        <Search
          value={search}
          onChange={(e) => {
            dispatch(copiesActions.setSearch(e.target.value));
            dispatch(getCopyWithCategory());
          }}
        />
      </div>

      <div className={s.list}>
        {loading_copies ? (
          <h2>Loading ...</h2>
        ) : data?.length > 0 ? (
          data.map((el) => <CardCopy key={el.id} data={el} />)
        ) : (
          <NotFound
            subTitle={"Bu categoriya uchun konspekt topilmadi"}
            style={{ height: 300 }}
          />
        )}
      </div>

      {data?.length > 0 && (
        <Pagination
          paginationParams={pagination}
          setPaginationParams={setPaginationParams}
        />
      )}
    </div>
  );
};

export default CopyList;

