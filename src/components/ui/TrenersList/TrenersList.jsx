import s from "./TrenersList.module.scss";
const aside = [
  { id: 1, name: "Xavi" },
  { id: 2, name: "Xavi" },
  { id: 3, name: "Xavi" },
  { id: 4, name: "Xavi" },
  { id: 5, name: "Xavi" },
  { id: 6, name: "Xavi" },
];
const TrenersList = () => {
  return (
    <div className={s.right}>
      <div className={s.aside_title}>Taniqli murabbiylar</div>
      <div className={s.list}>
        {aside.length &&
          aside.map((el) => (
            <div key={el.id} className={s.item}>
              <div className={s.item_name}>{el.name}</div>
              <div className={s.item_role}>Masterclass</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrenersList;

