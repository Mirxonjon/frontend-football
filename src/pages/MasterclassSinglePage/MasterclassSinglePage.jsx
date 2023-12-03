import Container from "../../components/ui/Container/Container";
import TrenersList from "../../components/ui/TrenersList/TrenersList";
import s from "./MasterclassSinglePage.module.scss";
import bg from "./../../assets/img/bg.png";
import plan from "./../../assets/img/plan.png";
const MasterclassSinglePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <div className={s.img}>
          <img src={bg} alt="trener" />
        </div>

        <Container>
          <h3 className={s.top_role}>Masterclass</h3>
          <h5 className={s.top_name}>Rafa Benítez</h5>
        </Container>
      </div>
      <Container>
        <div className={s.row}>
          <div className={s.left}>
            <div className={s.info}>
              <h2 className={s.title}>RAFA BENÍTEZ</h2>
              <h4 className={s.sub_title}>
                Valencia, 2001-2004; Liverpool, 2004-2010
              </h4>
              <p className={s.descr}>
                Over a top-level coaching career spanning almost three decades,
                Rafa Benítez has built his reputation on an ability to deliver
                success. A two-time Spanish league and UEFA Cup winner as head
                coach of Valencia, he subsequently led Liverpool to two
                Champions League finals, despite trailing 3-0 at half-time. He
                has also won silverware with Inter Milan, Chelsea, Napoli and
                Newcastle. In the first of two exclusive Masterclass features
                with The Coaches’ Voice, Benítez gives a fascinating insight
                into the key principles – both in and out of possession – of the
                he has used to such great effect throughout his career. He
                considers the team with which he won two league titles in Spain,
                paying particular attention to the roles of the two central
                midfielders who formed the David Albelda and Rubén Baraja. He
                goes on to explain the evolution of his team, with a specific
                focus on how the team developed after the 2007 signings of
                Fernando Torres and Javier Mascherano – and the impact that had
                on the role of Steven Gerrard. It’s a brilliant insight into the
                tactical mind of one of the modern game’s most respected
                coaches. We hope you enjoy it!
              </p>
            </div>
            <div className={s.img_plan}>
              <img src={plan} alt="plan" />
            </div>
          </div>
          <div className={s.right}>
            <TrenersList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MasterclassSinglePage;

