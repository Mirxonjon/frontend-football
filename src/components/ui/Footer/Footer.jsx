import "./footer.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import content from "./content";

function Footer() {
  const lang = useSelector((state) => state.lang.lang);

  const getLocalizedText = (content) => {
    return content && content[lang] ? content[lang] : content;
  };
  return (
    <footer>
      <Container>
        <div className="footer_container_wrapper">
          <div className="footer_conteirner">
            <div className="footer_conteirner_logo footer_conteirner_desc">
              <Logo large={true} />
              <p className="footer_conteirner_descrioption">
                {getLocalizedText(content.description)}
              </p>
            </div>

            <div className="footer_info">
              {/* <h2 className="footer_info_title">For customers</h2> */}
              <h2 className="footer_info_title">
                {getLocalizedText(content.customerInfo.title)}
              </h2>

              <div className="info__container">
                {content.customerInfo.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="info__container_link"
                  >
                    {getLocalizedText(link.label)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer_info">
              <h2 className="footer_info_title">
                {getLocalizedText(content.cooperation.title)}
              </h2>
              <div className="info__container">
                {content.cooperation.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="info__container_link"
                  >
                    {getLocalizedText(link.label)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer_info  footer_container_social">
              <h2 className="footer_info_title">
                {getLocalizedText(content.contact.title)}
              </h2>
              <div className="info__container info__container_social">
                <a
                  href={"mailto:" + content.contact.links.label}
                  className="info__container_link"
                >
                  {content.contact.links.label}
                </a>
                <div className="social_media_container">
                  {content.contact.socialMedia.map((media, index) => (
                    <Link
                      key={index}
                      style={{ fontSize: "20px" }}
                      href={media.href}
                      className="social_media_container_link"
                    >
                      {<media.icon />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer_container_end">
            {getLocalizedText(content.end)}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
