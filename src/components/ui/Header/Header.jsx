import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  // SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import LangChange from "../LangChange/LangChange";

import "./header.scss";
import Logo from "./../Logo/Logo";
import { useRef } from "react";
import { useEffect } from "react";
import Container from "../Container/Container";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const loyaut = useRef(null);
  const location = useLocation();
  const openIcon = useRef(null);

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
    <Container>
      <header className="header_container">
        <Logo className={"header_logo"} />
        <div ref={loyaut} className="header_layout">
          <Link className="header_layout_link" to={"/training"}>
            Mashg‘ulotlar
          </Link>
          <Link className="header_layout_link" to={"/contests"}>
            Musobaqalar
          </Link>
          <Link className="header_layout_link" to={"/books"}>
            Kitoblar
          </Link>
          <Link className="header_layout_link" to={"/masterclass"}>
            Masterclass
          </Link>
          <Link className="header_layout_link" to={"/copies"}>
            Konspektlar
          </Link>
        </div>
        <div className="container_signIn">
          {/* <div className="header_search">
            <SearchOutlined /> Search
          </div> */}
          <LangChange />
          <Link className="header_singin" to="/login">
            Sign In
          </Link>
          <div
            ref={openIcon}
            className="hamburger_menu"
            onClick={handleToggleMenu}
          >
            <MenuFoldOutlined />
          </div>
          <div className="hemburger_layout">
            <div className="hamburger_menu_close" onClick={handleToggleMenu}>
              <MenuUnfoldOutlined />
            </div>
            <div className="hamburger_list">
              <Link onClick={handleToggleMenu}  className="header_layout_link" to={"/training"}>
                Mashg‘ulotlar
              </Link>
              <Link onClick={handleToggleMenu} className="header_layout_link" to={"/contests"}>
                Musobaqalar
              </Link>
              <Link onClick={handleToggleMenu} className="header_layout_link" to={"/books"}>
                Kitoblar
              </Link>
              <Link onClick={handleToggleMenu} className="header_layout_link" to={"/masterclass"}>
                Masterclass
              </Link>
              <Link onClick={handleToggleMenu} className="header_layout_link" to={"/copies"}>
                Konspektlar
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}

export default Header;
