import Container from "../../components/ui/Container/Container";
import s from "./MasterclassPage.module.scss";
import img from "./../../assets/img/trener.png";
import img2 from "./../../assets/img/trener2.png";
const aside = [
  { id: 1, name: "Xavi" },
  { id: 2, name: "Xavi" },
  { id: 3, name: "Xavi" },
  { id: 4, name: "Xavi" },
  { id: 5, name: "Xavi" },
  { id: 6, name: "Xavi" },
];
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
        </div>
        <div className={s.right}>
          <div className={s.aside_title}>Taniqli murabbiylar</div>
          <div className={s.list}>
            {aside.length &&
              aside.map((el) => (
                <div key={el.id} className={s.item}>
                  <div className={s.item_name}>{el.name}</div>
                  <div className={s.item_role}>Masterclass</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MasterclassPage;

