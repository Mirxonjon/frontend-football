import c from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <div className={c.wrapper}>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-offset="300"
        className={c.item}
      >
        <div className={c.number}>42k</div>
        <div className={c.string}>members</div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-offset="300"
        className={c.item}
      >
        <div className={c.number}>38k</div>
        <div className={c.string}>units sold</div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-offset="300"
        className={c.item}
      >
        <div className={c.number}>62</div>
        <div className={c.string}>head coachs</div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-offset="300"
        className={c.item}
      >
        <div className={c.number}>220</div>
        <div className={c.string}>masterclass</div>
      </div>
    </div>
  );
};

export default Statistics;

