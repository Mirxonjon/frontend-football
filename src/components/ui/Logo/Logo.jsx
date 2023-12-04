import { Link } from "react-router-dom";
import img from "./../../../assets/img/logo.jpg";
import imgLarge from "./../../../assets/img/logoLarge.jpg";
// eslint-disable-next-line react/prop-types
const Logo = ({ large, ...props }) => (
  <Link to="/" {...props}>
    {large ? (
      <img width={140} src={imgLarge} alt="logo" />
    ) : (
      <img width={140} src={img} alt="logo" />
    )}
  </Link>
);
export default Logo;
