import c from "./HomePage.module.scss";
import cn from "classnames";
import img from "./../../assets/img/MaskGroup.png";
function Home() {
  return (
    <div className={cn(c.wrapper)}>
      <div className={c.hero}>
        <div data-aos="zoom-in-left" className={c.hero_content}>
          <h1 className={c.title}>Free Coaching Course!</h1>
          <p className={c.desc}>
            Sign up below to watch our exclusive CV Academy coaching course with
            Brentford B assistant coach Sam Saunders for free.
          </p>
          <button className={c.btn}>Sign Up Now!</button>
        </div>

        <div data-aos="zoom-in-right" className={c.hero_img}>
          <img src={img} alt="stedui img" />
        </div>
      </div>

      
    </div>
  );
}

export default Home;
