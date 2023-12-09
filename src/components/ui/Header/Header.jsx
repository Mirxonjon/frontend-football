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
import { menu } from "../../../content/pages";
import { useLocalizedText } from "../../../hook/useLocalizedText";
import img from "./../../../assets/img/acc.svg";
function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const loyaut = useRef(null);
  const location = useLocation();
  const openIcon = useRef(null);
  const token = localStorage.getItem("token");
  const langChange = useLocalizedText();
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
          {menu.length > 0 &&
            menu.map((el) => (
              <Link key={el.id} className="header_layout_link" to={el.path}>
                {el[langChange("name")]}
              </Link>
            ))}
        </div>
        <div className="container_signIn">
          {/* <div className="header_search">
            <SearchOutlined /> Search
          </div> */}
          <LangChange />
          {!token ? (
            <Link className="header_singin" to="/login">
              Sign In
            </Link>
          ) : (
            <Link className="header_account" to="/">
              <img src={img} alt="account logo" />
            </Link>
          )}
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
              {menu.length > 0 &&
                menu.map((el) => (
                  <Link
                    onClick={handleToggleMenu}
                    key={el.id}
                    className="header_layout_link"
                    to={el.path}
                  >
                    {el[langChange("name")]}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}

export default Header;
