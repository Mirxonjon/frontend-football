import { Button } from "antd";
import s from "./Pagination.module.scss";
import ToLeft from "../../svg/ToLeft";
import MyButton from "../MyButton/MyButton";
import ToRight from "../../svg/ToRight";

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
