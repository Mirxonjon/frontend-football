import s from "./BookList.module.scss";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import MySelect from "../MySelect/MySelect";
import { useState } from "react";
const BookList = ({ title, list, data, windowWidth }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  console.log(selectedValue);
  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <div className={s.title}>{title}</div>
        {windowWidth <= 990 && (
          <div className={s.select}>
            <MySelect options={list} onSelect={handleSelect} />
          </div>
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

