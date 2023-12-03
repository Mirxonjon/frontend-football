import s from "./Description.module.scss";

import home1 from "./../../../assets/img/home-1.png";
import home2 from "./../../../assets/img/home-2.png";
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import { heroText, offers } from "../../../content/homePage";
import { useLocalizedText } from "../../../hook/useLocalizedText";

const Description = () => {
  const navigate = useNavigate();

  const langChange = useLocalizedText();
  return (
    <>
      <div
        data-aos-duration="1300"
        data-aos-offset="500"
        data-aos="fade-down"
        className={s.hero}
      >
        <div className={s.hero_content}>
          <h1 className={s.title}>{heroText[langChange("hero")]}</h1>
          <p className={s.desc}>{heroText[langChange("desc")]}</p>
          <div className={s.btn}>
            <MyButton
              onClick={() => {
                navigate("/register");
              }}
            >
              {heroText[langChange("btn")]}
            </MyButton>
          </div>
        </div>

        <div className={s.hero_img}>
          <video
            width="100%"
            height="auto"
            autoPlay
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
        className={s.row}
      >
        <div className={s.img}>
          <img src={home1} alt="home img ball" />
        </div>
        <div className={s.content}>
          <h3 className={s.smTitle}>{offers[0][langChange("title")]} </h3>
          <p className={s.smDesc}>{offers[0][langChange("desc")]}</p>
        </div>
      </div>

      <div
        data-aos-duration="1300"
        data-aos-offset="200"
        data-aos="fade-right"
        className={s.row}
      >
        <div className={s.content}>
          <h3 className={s.smTitle}>{offers[0][langChange("title")]} </h3>
          <p className={s.smDesc}>{offers[0][langChange("desc")]}</p>
        </div>
        <div className={s.img}>
          <img src={home2} alt="home img ball" />
        </div>
      </div>
    </>
  );
};

export default Description;

