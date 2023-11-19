import s from "./BookList.module.scss";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { Button, Select } from "antd";
import ToRight from "../../../components/svg/ToRight";
import ToLeft from "../../../components/svg/ToLeft";
import MyButton from "../MyButton/MyButton";
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

      <div className={s.pagination}>
        <div className={s.btns}>
          <Button>
            <ToLeft />
          </Button>
          <MyButton className={s.btn} type="primary">
            <span>Keyingi sahifa</span>
            <ToRight />
          </MyButton>
        </div>

        <div className={s.number}>
          Sahifa <span>2</span> 8 ta dan
        </div>
      </div>
    </div>
  );
};

export default BookList;

