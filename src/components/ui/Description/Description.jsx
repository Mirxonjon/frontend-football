import c from "./Description.module.scss";

import img from "./../../../assets/img/MaskGroup.png";
import home1 from "./../../../assets/img/home-1.png";
import home2 from "./../../../assets/img/home-2.png";
import MyButton from "../MyButton/MyButton";

const Description = () => {
  return (
    <>
      <div
        data-aos-duration="1300"
        data-aos-offset="500"
        data-aos="fade-down"
        className={c.hero}
      >
        <div className={c.hero_content}>
          <h1 className={c.title}>Free Coaching Course!</h1>
          <p className={c.desc}>
            Sign up below to watch our exclusive CV Academy coaching course with
            Brentford B assistant coach Sam Saunders for free.
          </p>
          <div className={c.btn}>
            <MyButton>Sign Up Now!</MyButton>
          </div>
        </div>

        <div className={c.hero_img}>
          <img src={img} alt="stedui img" />
        </div>
      </div>

      <div
        data-aos-duration="1300"
        data-aos-offset="200"
        data-aos="fade-left"
        className={c.row}
      >
        <div className={c.img}>
          <img src={home1} alt="home img ball" />
        </div>
        <div className={c.content}>
          <h3 className={c.smTitle}>Coaching Knowledge</h3>
          <p className={c.smDesc}>
            Positional play, also known as juego de posición, is a principle of
            play in football that many of the world’s top coaches adopt. When a
            team uses positional play.
          </p>
        </div>
      </div>

      <div
        data-aos-duration="1300"
        data-aos-offset="200"
        data-aos="fade-right"
        className={c.row}
      >
        <div className={c.content}>
          <h3 className={c.smTitle}>Exclusive coaching courses</h3>
          <p className={c.smDesc}>
            Enjoy exclusive access to two in-depth video coaching courses each
            month, delivered by elite professional and academy football coaches
            with experience at levels including the Champions League, Premier
            League and La Liga.
          </p>
        </div>
        <div className={c.img}>
          <img src={home2} alt="home img ball" />
        </div>
      </div>
    </>
  );
};

export default Description;

