import Container from "../../components/ui/Container/Container";
import s from "./MasterclassPage.module.scss";
import Pagination from "../../components/ui/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getMasterclassCategory,
  masterclassCategoryActions,
} from "../../store/masterclass/masterclassSlice";
import NotFound from "../../components/ui/404/404";
import { Link } from "react-router-dom";
// import TrenersList from "../../components/ui/TrenersList/TrenersList";

const MasterclassPage = () => {
  const dispatch = useDispatch();
  const treners = useSelector((state) => state.masterclass.masterclassCategory);
  const pagination = useSelector((state) => state.masterclass.pagination);
  console.log(treners[0]);
  useEffect(() => {
    dispatch(getMasterclassCategory());
  }, []);

  function setPaginationParams(paginationParams) {
    dispatch(masterclassCategoryActions.setPagination(paginationParams));
    dispatch(getMasterclassCategory());
  }
  return (
    <Container>
      <div className={s.wrapper}>
        {treners?.length > 0 ? (
          <div className={s.left}>
            <div className={s.title}>Masterclasslar</div>
            <div className={s.hero}>
              <Link to={treners[0].id} className={s.img}>
                <img
                  src={
                    "https://storage.googleapis.com/telecom2003/" +
                    treners[0].img_link
                  }
                  alt="trener"
                />
              </Link>
              <div className={s.role}>Masterclass</div>
              <Link to={treners[0].id} className={s.name}>
                {treners[0].title}
              </Link>
              <div className={s.about}>{treners[0].title_descrioption}</div>
            </div>
            <div className={s.treners_list}>
              {treners.slice(1).map((el) => (
                <Link to={el.id} key={el.id} className={s.trener}>
                  <div className={s.trener_img}>
                    <img
                      src={
                        "https://storage.googleapis.com/telecom2003/" +
                        el.img_link
                      }
                      alt="trener"
                    />
                  </div>
                  <div className={s.trener_role}>Masterclass</div>
                  <div className={s.trener_name}>{el.title}</div>
                </Link>
              ))}
            </div>
            <Pagination
              paginationParams={pagination}
              setPaginationParams={setPaginationParams}
            />
          </div>
        ) : (
          <NotFound />
        )}
        {/* <TrenersList /> */}
      </div>
    </Container>
  );
};

export default MasterclassPage;

