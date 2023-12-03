import FormWrapper from "../../components/ui/FormWrapper/FormWrapper";
import MyButton from "../../components/ui/MyButton/MyButton";
import s from "./LoginPage.module.scss";
import img from "./../../assets/img/bg2.png";
import { Link, useNavigate } from "react-router-dom";
import { Input, message } from "antd";
import { useState } from "react";
import FT_API from "../../api/api";
const LoginPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [userData, setUserData] = useState({
    gmail: "Eshmat@gmail.com",
    password: "123",
  });
  async function LoginFunc(e) {
    e.preventDefault();
    FT_API.post(
      "/Auth/SignIn",
      {
        ...userData,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    ).catch((err) => {
      if (err.response.status === 302) {
        localStorage.setItem("token", err.response.data.token);
        navigate("/");
      } else {
        messageApi.open({
          type: "error",
          content: err.response.data.message,
        });
      }
    });
  }
  return (
    <FormWrapper
      title={"Xush kelibsiz!"}
      subTitle={"Iltimos, davom etish uchun maʼlumotlarni kiriting!"}
      img={img}
    >
      {contextHolder}
      <form onSubmit={LoginFunc} className={s.form}>
        <div className={s.label}>Email</div>
        <Input
          required="this input required"
          type="email"
          value={userData.gmail}
          onChange={(e) => setUserData({ ...userData, gmail: e.target.value })}
          className={s.input}
          placeholder="Emailingizni kiriting"
        />

        <div className={s.label}>Parol</div>
        <Input.Password
          required="this input required"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          className={s.input}
          placeholder="Parolni kiriting"
        />
        <div className={s.btn}>
          <MyButton>Kirish</MyButton>
        </div>
        <div className={s.register}>
          Platformamizda yangimisiz?
          <Link to="/register"> Ro‘yhatdan o‘tish</Link>
        </div>
      </form>
    </FormWrapper>
  );
};

export default LoginPage;

