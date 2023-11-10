import "./header.scss"
import HeaderLogo from './../../assets/img/headerLogo.jpg'
import{ AiOutlineSearch } from 'react-icons/ai'
import { SearchOutlined ,GlobalOutlined ,MenuFoldOutlined} from "@ant-design/icons";

function Header() {
    return (
        <header className="header_container">
            <img src={HeaderLogo} alt="" className="logo_img" />
            <div className="header_layout">
                <a className="header_layout_link" href="#">Mashg‘ulotlar</a>
                <a className="header_layout_link" href="#">Taktika</a>
                <a  className="header_layout_link" href="#">Kitoblar</a>
                <a className="header_layout_link" href="#">Masterclass</a>
                <a className="header_layout_link" href="#">Konspektlar</a>
            </div>
            <div className="container_signIn">

            <div className="header_search"> <SearchOutlined /> Search</div>
            <div className="header_lang"><GlobalOutlined /> Uz <div className="header_lang_select">
                <button className="select_btn" >Uz</button>
                <button  className="select_btn">Ru</button>

                </div></div>
            <a className="header_singin" href="#">Sign In</a>
            <div className="hamburger_menu"><MenuFoldOutlined /></div>
            <div className="hemburger_layout">
                <a className="header_layout_link" href="#">Mashg‘ulotlar</a>
                <a className="header_layout_link" href="#">Taktika</a>
                <a  className="header_layout_link" href="#">Kitoblar</a>
                <a className="header_layout_link" href="#">Masterclass</a>
                <a className="header_layout_link" href="#">Konspektlar</a>
            </div>
            </div>


        </header>
    );
  }
  
  export default Header;