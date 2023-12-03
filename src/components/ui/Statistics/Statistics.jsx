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
        <div className={c.number}>102</div>
        <div className={c.string}>members</div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-offset="300"
        className={c.item}
      >
        <div className={c.number}>50</div>
        <div className={c.string}>units sold</div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-offset="300"
        className={c.item}
      >
        <div className={c.number}>22</div>
        <div className={c.string}>head coachs</div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="1500"
        data-aos-offset="300"
        className={c.item}
      >
        <div className={c.number}>20</div>
        <div className={c.string}>masterclass</div>
      </div>
    </div>
  );
};

export default Statistics;

