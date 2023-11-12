import { useState } from "react";
import {  GlobalOutlined  } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
// import { NotificationContainer, NotificationManager } from "react-notifications";

import "./lang-change.scss"
import { editLang } from "../../store/slice/lang";


function LangChange() {
    const [isOpenLang, setIsOpenLang] = useState(true);
    const dispatch = useDispatch();
    const {lang ,loading}= useSelector((state) => state.lang);
    
    console.log(loading ,'okk');
    const handleLang = () => {

        if(isOpenLang) {
          document.querySelector('.header_lang_select').style.display = "block";
        }else {
            document.querySelector('.header_lang_select').style.display = "none";
        }
        setIsOpenLang(!isOpenLang);
    };
    
    const handleLanguageSelect = (selectedLang) => {
        dispatch(editLang(selectedLang));
    };
    return(
        <div className="header_lang" onClick={handleLang}><GlobalOutlined /> {lang} 
        <div className="header_lang_select">
            <button className="select_btn" onClick={() => handleLanguageSelect("Uz")} >Uz</button>
            <button  className="select_btn" onClick={() => handleLanguageSelect("Ru")}>Ru</button>
            </div>
            {/* <NotificationContainer /> */}
        </div>
    )
}


    export default LangChange;