import Container from "../../components/ui/Container/Container";
import s from "./MasterclassPage.module.scss";
import img from "./../../assets/img/trener.png";
import img2 from "./../../assets/img/trener2.png";
import Pagination from "../../components/ui/Pagination/Pagination";
import TrenersList from "../../components/ui/TrenersList/TrenersList";

const treners = [
  { id: 1, name: "Xavi" },
  { id: 2, name: "Jose Mourinho" },
  { id: 3, name: "XaJose Mourinhovi" },
  { id: 4, name: "Jose Mourinho" },
];
const MasterclassPage = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <div className={s.left}>
          <div className={s.title}>Masterclasslar</div>
          <div className={s.hero}>
            <img src={img} alt="trener" />
            <div className={s.role}>Masterclass</div>
            <div className={s.name}>Rafa Benitez</div>
            <div className={s.about}>
              Rafa Benitez on a famous Champions League win against Real Madrid
              for a Liverpool...
            </div>
          </div>
          <div className={s.treners_list}>
            {treners.length &&
              treners.map((el) => (
                <div key={el.id} className={s.trener}>
                  <div className={s.trener_img}>
                    <img src={img2} alt="trener" />
                  </div>
                  <div className={s.trener_role}>Masterclass</div>
                  <div className={s.trener_name}>{el.name}</div>
                </div>
              ))}
          </div>
          <Pagination />
        </div>
        <TrenersList />
      </div>
    </Container>
  );
};

export default MasterclassPage;

