import c from "./MyButton.module.scss";
const MyButton = ({ children }) => {
  return <button className={c.btn}>{children}</button>;
};

export default MyButton;
