import { Link } from "react-router-dom";
import s from "./TrenersList.module.scss";
import { useLocalizedText } from "../../../hook/useLocalizedText";

const TrenersList = ({ data }) => {
  const changaLang = useLocalizedText();
  const content = {
    popular: "Taniqli murabbiylar",
    popular_ru: "Популярные тренеры",
    massterclass: "Masterclass",
    massterclass_ru: "Мастеркласс",
  };
  return (
    <div className={s.right}>
      <div className={s.aside_title}>{content[changaLang("popular")]}</div>
      <div className={s.list}>
        {data?.length &&
          data.map((el) => (
            <Link to={"/masterclass/" + el.id} key={el.id} className={s.item}>
              <div className={s.item_name}>{el[changaLang("title")]}</div>
              <div className={s.item_role}>
                {content[changaLang("massterclass")]}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TrenersList;

