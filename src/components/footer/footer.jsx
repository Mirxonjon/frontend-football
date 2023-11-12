import "./footer.scss"
import HeaderLogo from './../../assets/img/headerLogo.jpg'
import { FacebookFilled ,InstagramFilled ,YoutubeFilled} from "@ant-design/icons";
import { Link} from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="footer_container_wrapper">

            <div className="footer_conteirner">
            <div className="footer_conteirner_logo footer_conteirner_desc">
                <img src={HeaderLogo} alt="Logo" className="footer_Logo" />
                <p className="footer_conteirner_descrioption">football tactics and coaching definitions football tactics and coaching definitions</p>
            </div>

            <div className="footer_info">
                <h2 className="footer_info_title">For customers</h2>
                <div className="info__container">
                    <Link href="/#" className="info__container_link">How to choose a product</Link>
                    <Link href="/#" className="info__container_link">Payment and delivery</Link>
                    <Link href="/#" className="info__container_link">Feedback</Link>
                    <Link href="/#" className="info__container_link">Buy as a legal entity</Link>
                    <Link href="/#" className="info__container_link">About the service</Link>

                </div>
            </div>

            <div className="footer_info">
                <h2 className="footer_info_title">Cooperation</h2>
                <div className="info__container">
                    <Link href="/#" className="info__container_link">Company News</Link>
                    <Link href="/#" className="info__container_link">Affiliate program</Link>
                    <Link href="/#" className="info__container_link">A program for bloggers</Link>
                    <Link href="/#" className="info__container_link">For manufacturers</Link>

                </div>
            </div>

            <div className="footer_info  footer_container_social">
                <h2 className="footer_info_title">Contact</h2>
                <div className="info__container info__container_social">
                    <a href="/#" className="info__container_link">Coaching@mail.com</a>
                    <div className="social_media_container">
                    <Link style={{ fontSize: "20px" }} href="/#" className="social_media_container_link"><FacebookFilled  /></Link>
                    <Link style={{ fontSize: "20px" }} href="/#" className="social_media_container_link"><InstagramFilled /></Link>
                    <Link style={{ fontSize: "20px" }} href="/#" className="social_media_container_link"><YoutubeFilled /></Link>
                    </div>
                

                </div>
            </div>
            </div>

            <div className="footer_container_end">
            Copyright © 2023 Coaching. All rights reserved.
            </div>
            </div>

        </footer>
    );
  }
  
  export default Footer;