import { useEffect, useState } from "react";
import Container from "../../components/ui/Container/Container";
import s from "./CopyPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCopyAllCategory, getCopyWithCategory } from "../../store/copy/copiesSlice";
import AsideCopy from "../../components/ui/AsideCopy/AsideCopy";
import CopyList from "../../components/ui/CopyList/CopyList";

const CopyPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const copyCategory = useSelector((state) => state.copies.copyCategory);
  const copies = useSelector((state) => state.copies.copies);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    dispatch(getCopyWithCategory());
    dispatch(getCopyAllCategory());
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <div className={s.wrapper}>
        {copyCategory && windowWidth > 990 && <AsideCopy list={copyCategory} title={"Kategoriyalar"} />}
        <CopyList
          windowWidth={windowWidth}
          list={copyCategory}
          data={copies}
          title="Konspektar"
        />
      </div>
    </Container>
  );
};

export default CopyPage;

