import c from "./Description.module.scss";

import home1 from "./../../../assets/img/home-1.png";
import home2 from "./../../../assets/img/home-2.png";
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        data-aos-duration="1300"
        data-aos-offset="500"
        data-aos="fade-down"
        className={c.hero}
      >
        <div className={c.hero_content}>
          <h1 className={c.title}>
            Murabbiylar zonasi platformasiga xush kelibsiz.
          </h1>
          <p className={c.desc}>
            Yaxshi futbol murabbiyi bo’lish yo’li shu erdan boshlanadi. Biz
            sizga dunyoning eng yaxshi futbol murabbiylarining strategiyalari,
            taktikasi va amaliy mashg’ulotlari bilan tanishish imkoniyatini
            beramiz.
          </p>
          <div className={c.btn}>
            <MyButton
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up Now!
            </MyButton>
          </div>
        </div>

        <div className={c.hero_img}>
          <video
            width="100%"
            height="auto"
            autoPlay="true"
            playsInline
            muted
            loop
            controls
          >
            <source
              src="https://storage.googleapis.com/telecom2003/video_for_site.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
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
          <h3 className={c.smTitle}>Jamoaviy mashg’ulotlar </h3>
          <p className={c.smDesc}>
            100 dan ortiq jamoaviy futbol mashqlari, taktika, texnika va
            o’yinchilarni rivojlantirish mashg’ulotlari
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
          <h3 className={c.smTitle}>
            Yakkama-yakka va kichik guruh mashg’ulotlari{" "}
          </h3>
          <p className={c.smDesc}>
            Bir qator yakkama-yakka va kichik guruh mashg’ulotlar video
            sessiyalari, barchasi professional murabbiylar tomonidan olib
            boriladi.
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

