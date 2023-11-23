import s from "./SaidbarCategories.module.scss";
const SaidbarCategories = ({ title }) => {
  const data = [
    { id: 1, name: "Barcha taktikalar" },
    { id: 2, name: "Barcha taktikalar" },
    { id: 3, name: "Barcha taktikalar" },
    { id: 4, name: "Barcha taktikalar" },
  ];
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>
        {data.length &&
          data.map((el) => (
            <li key={el.id} className={el.id === 1 ? s.active : ""}>
              {el.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SaidbarCategories;

