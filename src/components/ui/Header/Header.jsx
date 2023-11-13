import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import LangChange from "../LangChange/LangChange";

import "./header.scss";
import LogoSvg from "../../icons/Logo";
import { useRef } from "react";
import { useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const loyaut = useRef(null);
  const location = useLocation();
  const handleToggleMenu = () => {
    if (isOpen) {
      document.querySelector(".hemburger_layout").style.display = "flex";
    } else {
      document.querySelector(".hemburger_layout").style.display = "none";
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    loyaut.current.childNodes.forEach((el) => {
      if (window.location.href.toLowerCase() === el.href.toLowerCase()) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }, [location]);
  return (
    <header className="header_container">
      <LogoSvg className={"header_logo"} />
      <div ref={loyaut} className="header_layout">
        <Link className="header_layout_link" to={"/training"}>
          Mashg‘ulotlar
        </Link>
        <Link className="header_layout_link" to={"/tactic"}>
          Taktika
        </Link>
        <Link className="header_layout_link" to={"/books"}>
          Kitoblar
        </Link>
        <Link className="header_layout_link" to={"/Masterclass"}>
          Masterclass
        </Link>
        <Link className="header_layout_link" to={"/Copies"}>
          Konspektlar
        </Link>
      </div>
      <div className="container_signIn">
        <div className="header_search">
          <SearchOutlined /> Search
        </div>
        <LangChange />
        <a className="header_singin" href="#">
          Sign In
        </a>
        <div className="hamburger_menu" onClick={handleToggleMenu}>
          <MenuFoldOutlined />
        </div>
        <div className="hemburger_layout">
          <div className="hamburger_menu_close" onClick={handleToggleMenu}>
            <MenuUnfoldOutlined />{" "}
          </div>
          <Link className="header_layout_link" href="#">
            Mashg‘ulotlar
          </Link>
          <Link className="header_layout_link" href="#">
            Taktika
          </Link>
          <Link className="header_layout_link" href="#">
            Kitoblar
          </Link>
          <Link className="header_layout_link" href="#">
            Masterclass
          </Link>
          <Link className="header_layout_link" href="#">
            Konspektlar
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
