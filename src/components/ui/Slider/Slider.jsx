import c from "./Slider.module.scss";
import img1 from "./../../../assets/img/slider.png";
import { useDispatch, useSelector } from "react-redux";
import { getMasterclassCategory } from "../../../store/masterclass/masterclassSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalizedText } from "../../../hook/useLocalizedText";

const content = {
  masterclass: "Masterclass",
  masterclass_ru: "Мастерклассы",
};
const MySilder = () => {
  const dispatch = useDispatch();
  const treners = useSelector((state) => state.masterclass.masterclassCategory);

  const langChange = useLocalizedText();
  useEffect(() => {
    dispatch(getMasterclassCategory());
  }, []);
  return (
    <div className={c.row}>
      {treners.length > 0
        ? treners.slice(0, 3).map((el) => (
            <Link
              to={"/masterclass/" + el.id}
              data-aos-duration="1500"
              data-aos-offset="300"
              data-aos="fade-right"
              className={c.item}
              key={el.id}
            >
              <div className={c.img}>
                <img src={img1} alt="trener photo" />
              </div>
              <div className={c.role}>{content[langChange("masterclass")]}</div>
              <div className={c.name}>{el[langChange("title")]}</div>
              <div className={c.description}>
                {el[langChange("title_descrioption")]}
              </div>
            </Link>
          ))
        : ""}
    </div>
  );
};

export default MySilder;

