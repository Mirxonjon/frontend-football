import Container from "../../components/ui/Container/Container";
import s from "./ContestVideoPage.module.scss";
import SaidbarCategories from "../../components/ui/SaidbarCategories/SaidbarCategories";
const ContestVideoPage = () => {
  return (
    <Container>
      <div className={s.row}>
        <div className={s.left}>
          <div className={s.video}>
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
          <div className={s.description}>
            The principles of this corner kick are very much the same as the but
            in this variation the ball is served much closer to the end line.
            Again the goal is to force the defender that is marking the near
            side of the 18 box to vacate their space by sending in a player from
            the mid-field calling for the ball. Once this player vacates the
            space then a player from the bunch will make a run into the space.
          </div>
        </div>
        <div className={s.right}>
          <SaidbarCategories title={'Taktika toifalari'} />
        </div>
      </div>
    </Container>
  );
};

export default ContestVideoPage;

