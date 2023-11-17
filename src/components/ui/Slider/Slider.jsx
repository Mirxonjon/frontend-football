import c from "./Slider.module.scss";
import img1 from "./../../../assets/img/slider.png";
import img2 from "./../../../assets/img/slider2.png";
import img3 from "./../../../assets/img/slider3.png";
const MySilder = () => {
  return (
    <div className={c.row}>
      <div
        data-aos-duration="1500"
        data-aos-offset="300"
        data-aos="fade-right"
        className={c.item}
      >
        <div className={c.img}>
          <img src={img1} alt="trener photo" />
        </div>
        <div className={c.role}>Masterclass</div>
        <div className={c.name}>Jose Mourinho</div>
        <div className={c.description}>
          Jose Mourinho organised Inter Milan to ovrcome Barcelona and Lionel
          Messi en route
        </div>
      </div>
      <div
        data-aos-duration="1500"
        data-aos-offset="300"
        data-aos="zoom-out-up"
        className={c.item}
      >
        <div className={c.img}>
          <img src={img2} alt="trener photo" />
        </div>
        <div className={c.role}>Masterclass</div>
        <div className={c.name}>Rafa Benitez</div>
        <div className={c.description}>
          Jose Mourinho organised Inter Milan to ovrcome Barcelona and Lionel
          Messi en route to...
        </div>
      </div>
      <div
        data-aos-duration="1500"
        data-aos-offset="300"
        data-aos="fade-left"
        className={c.item}
      >
        <div className={c.img}>
          <img src={img3} alt="trener photo" />
        </div>
        <div className={c.role}>Masterclass</div>
        <div className={c.name}>Will Still</div>
        <div className={c.description}>
          Jose Mourinho organised Inter Milan to ovrcome Barcelona and Lionel
          Messi en route
        </div>
      </div>
    </div>
  );
};

export default MySilder;

