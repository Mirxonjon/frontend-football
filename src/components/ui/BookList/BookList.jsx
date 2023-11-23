import s from "./BookList.module.scss";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { Select } from "antd";
import Pagination from "../Pagination/Pagination";
const BookList = ({ title, list, data, windowWidth }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={s.title}>{title}</div>
        {windowWidth <= 990 && (
          <Select
            className={s.select}
            defaultValue={1}
            onChange={(e) => console.log(e.target.value)}
            options={list.map((el) => ({
              value: el.id,
              label: el.name,
            }))}
          />
        )}
        <Search />
      </div>
      <div className={s.list}>
        {data?.length &&
          data.map((el, index) => <Card key={el.id + index} data={el} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default BookList;

