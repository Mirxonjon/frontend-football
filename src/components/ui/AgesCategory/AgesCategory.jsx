import s from "./AgesCategory.module.scss";
import img from "./../../../assets/img/age2.png";
const ages = [
  { id: 1, name: "U 5-8 yoshdagilar" },
  { id: 2, name: "U 9-13 yoshdagilar" },
  { id: 3, name: "U 14-17 yoshdagilar" },
  { id: 4, name: "U 18-21 yoshdagilar" },
];
const AgesCategory = () => {
  return (
    <div className={s.row}>
      {ages.length &&
        ages.map((age) => (
          <div key={ages.id} className={s.item}>
            <img src={img} alt={age.name} />
            <span>{age.name}</span>
          </div>
        ))}
    </div>
  );
};

export default AgesCategory;

