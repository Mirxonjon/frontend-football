import { useNavigate, useParams } from "react-router-dom";
import s from "./CopySinglePage.module.scss";
import Container from "../../components/ui/Container/Container";
import imgBook from "./../../assets/img/bookFrame.png";
import MyButton from "../../components/ui/MyButton/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRecomendCopies,
  randomCopiesActions,
  singleCopy,
} from "../../store/copy/randomCopy.js";
import CardCopy from "../../components/ui/CardCopy/CardCopy";

const CopySinglePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const RandomCopies = useSelector(
    (state) => state.randomCopies.recomendCopies
  );
  const copy = useSelector(
    (state) => state.randomCopies.singleCopy?.findShortBook
  );
  const isFollow =
    useSelector((state) => state.randomCopies.singleCopy?.follow) === "true"
      ? true
      : false;

  console.log(isFollow);
  const { id } = useParams();
  const downloadFile = () => {
    if (isFollow) {
      const url =
        "https://storage.googleapis.com/telecom2003/" + copy.short_book_link;
      const link = document.createElement("a");
      link.href = url;
      link.download = "your_file_name.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    dispatch(singleCopy(id));
    if (RandomCopies?.length) {
      dispatch(randomCopiesActions.getRandomCopies());
    } else {
      dispatch(getRecomendCopies())
        .unwrap()
        .then((result) => {
          dispatch(randomCopiesActions.getRandomCopies(result));
        });
    }
  }, [id]);
  if (!copy) {
    return (
      <h2 style={{ textAlign: "center", fontSize: 22, marginTop: 50 }}>
        Loading ...
      </h2>
    );
  }
  return (
    <Container>
      <div className={s.wrapper}>
        <div className={s.main}>
          <div className={s.row}>
            <div className={s.img}>
              <img
                src={
                  copy?.short_book_img
                    ? "https://storage.googleapis.com/telecom2003/" +
                      copy?.short_book_img
                    : imgBook
                }
                alt="copy"
              />
            </div>
            <div className={s.body}>
              <div className={s.name}>{copy.title}</div>
              <div className={s.price}>
                {copy.short_book_lang == "ru" ? "Ruscha" : "O`zbekcha"}
              </div>
              <div className={s.info}>
                {!isFollow ? "Yuklab olish uchun tizimga kirish keark" : ""}
              </div>
              <div className={s.btn}>
                <MyButton onClick={downloadFile}>{"Yuklab olish"}</MyButton>
              </div>
            </div>
          </div>
          <div className={s.descrip}>
            <h2 className={s.descripTitle}>Mahsulot tavsifi</h2>
            <p>{copy.description_book}</p>
          </div>
        </div>
        <aside className={s.aside}>
          <h2 className={s.titleRecomend}>Tavsiya etamiz</h2>
          <div className={s.list}>
            {RandomCopies?.length &&
              RandomCopies.map((copy) => (
                <CardCopy withOutBtn={true} key={copy.id} data={copy} />
              ))}
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default CopySinglePage;

