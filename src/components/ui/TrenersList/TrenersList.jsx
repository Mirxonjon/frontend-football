import { Link } from "react-router-dom";
import s from "./TrenersList.module.scss";

const TrenersList = ({ data }) => {
  return (
    <div className={s.right}>
      <div className={s.aside_title}>Taniqli murabbiylar</div>
      <div className={s.list}>
        {data?.length &&
          data.map((el) => (
            <Link to={"/masterclass/" + el.id} key={el.id} className={s.item}>
              <div className={s.item_name}>{el.title}</div>
              <div className={s.item_role}>Masterclass</div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TrenersList;

