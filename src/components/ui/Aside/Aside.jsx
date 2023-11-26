import c from "./Aside.module.scss";

const Aside = ({ title, list }) => {
  return (
    <div className={c.wrapper}>
      <div className={c.title}>{title}</div>
      {list?.length && list.map((i) => <button className={c.item} key={i.value}>{i.name}</button>)}
    </div>
  );
};

export default Aside;

