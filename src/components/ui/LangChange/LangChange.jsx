import { useState } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import "./LangChange.scss";
import { useEffect } from "react";
import { langActions } from "../../../store/slice/lang";
function LangChange() {
  const [isOpenLang, setIsOpenLang] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { lang, loading } = useSelector((state) => state.lang);

  const handleLang = () => {
    if (isOpenLang) {
      document.querySelector(".header_lang_select").style.display = "none";
    } else {
      document.querySelector(".header_lang_select").style.display = "block";
    }
    setIsOpenLang(!isOpenLang);
  };

  const handleLanguageSelect = (selectedLang) => {
    dispatch(langActions.setLang(selectedLang));
  };

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        !e.target.closest(".header_lang") &&
        document.querySelector(".header_lang_select")?.style?.display ===
          "block"
      ) {
        document.querySelector(".header_lang_select").style.display = "none";
        setIsOpenLang(false);
      }
    });
  }, []);

  return (
    <div className="header_lang" onClick={handleLang}>
      <GlobalOutlined /> {lang}
      <div className="header_lang_select">
        <button
          className="select_btn"
          onClick={() => handleLanguageSelect("uz")}
        >
          Uz
        </button>
        <button
          className="select_btn"
          onClick={() => handleLanguageSelect("ru")}
        >
          Ru
        </button>
      </div>
      {/* <NotificationContainer /> */}
    </div>
  );
}

export default LangChange;
