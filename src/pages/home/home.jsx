import c from "./home.module.scss";

function Home() {
  return (
    <div className={c.wrapper}>
      <div className={c.hero}>
        <div className={c.hero_content}>
          <h1 className={c.title}>Free Coaching Course!</h1>
          <p className={c.desc}>
            Sign up below to watch our exclusive CV Academy coaching course with
            Brentford B assistant coach Sam Saunders for free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
