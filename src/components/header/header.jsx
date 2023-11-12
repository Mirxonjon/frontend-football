import { useState } from "react";
import { Link } from "react-router-dom"

import { SearchOutlined  ,MenuFoldOutlined ,MenuUnfoldOutlined} from "@ant-design/icons";
import LangChange from "../lang-change/lang-change";
import HeaderLogo from './../../assets/img/headerLogo.jpg'
import "./header.scss"

function Header() {
    const [isOpen, setIsOpen] = useState(true);


    const handleToggleMenu = () => {
        if(isOpen) {
    
          document.querySelector('.hemburger_layout').style.display = "flex";
           
        }else {
            document.querySelector('.hemburger_layout').style.display = "none";

        }
      setIsOpen(!isOpen);
    };



    return (
        <header className="header_container">
            <img src={HeaderLogo} alt="" className="logo_img" />
            <div className="header_layout">
                <Link className="header_layout_link"  to={'/training'} >Mashg‘ulotlar</Link>
                <Link className="header_layout_link" to={'/tactic'} >Taktika</Link>
                <Link  className="header_layout_link" to={'/books'} >Kitoblar</Link>
                <Link className="header_layout_link" to={'/Masterclass'} >Masterclass</Link>
                <Link className="header_layout_link" to={'/Copies'} >Konspektlar</Link>
            </div>
            <div className="container_signIn">

            <div className="header_search"> <SearchOutlined /> Search</div>
                <LangChange />
            <a className="header_singin" href="#">Sign In</a>
            <div className="hamburger_menu" onClick={handleToggleMenu} ><MenuFoldOutlined /></div>
            <div className="hemburger_layout">
                <div className="hamburger_menu_close" onClick={handleToggleMenu} ><MenuUnfoldOutlined /> </div>
                <Link className="header_layout_link" href="#">Mashg‘ulotlar</Link>
                <Link className="header_layout_link" href="#">Taktika</Link>
                <Link  className="header_layout_link" href="#">Kitoblar</Link>
                <Link className="header_layout_link" href="#">Masterclass</Link>
                <Link className="header_layout_link" href="#">Konspektlar</Link>
            </div>
            </div>


        </header>
    );
  }
  
  export default Header;