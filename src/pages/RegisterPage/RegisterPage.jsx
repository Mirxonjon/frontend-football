import FormWrapper from "../../components/ui/FormWrapper/FormWrapper";
import MyButton from "../../components/ui/MyButton/MyButton";
import s from "./RegisterPage.module.scss";
import img from "./../../assets/img/bg3.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, message } from "antd";
import moment from "moment";
import FT_API from "../../api/api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [userData, setUserData] = useState({
    name: "Eshmat",
    surname: "Toshmatov",
    was_born: "08.08.2000",
    number: "+998933843484",
    gmail: "Eshmat@gmail.com",
    password: "123",
  });

  async function RegisterFunc(e) {
    e.preventDefault();
    const res = await FT_API.post("/Auth/register", {
      ...userData,
    }).catch((err) => {
      messageApi.open({
        type: "error",
        content: err.response.data.message,
      });
    });
    if (res.status === 201) {
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } else {
      messageApi.open({
        type: "error",
        content: res.data.message,
      });
    }
  }

  return (
    <FormWrapper
      title={"Xush kelibsiz!"}
      subTitle={`Kuchli futbol mashg’ulotlari va taktikalardan foydalangan
      holda yuqori marralarni zabt eting!`}
      img={img}
    >
      {contextHolder}
      <form onSubmit={RegisterFunc} className={s.form}>
        <div className={s.label}>Ism</div>
        <Input
          required="this input required"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className={s.input}
          placeholder="Ismingizni kiriting"
        />
        <div className={s.label}>Familiya</div>
        <Input
          required="this input required"
          value={userData.surname}
          onChange={(e) =>
            setUserData({ ...userData, surname: e.target.value })
          }
          className={s.input}
          placeholder="Familiyangizni kiriting"
        />
        <div className={s.row}>
          <div>
            <div className={s.label}>Tug‘ilgan sana</div>
            <Input
              required="this input required"
              value={moment(userData.was_born, "DD.MM.YYYY").format(
                "YYYY-MM-DD"
              )}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  was_born: moment(e.target.value, "YYYY-MM-DD").format(
                    "DD.MM.YYYY"
                  ),
                })
              }
              className={s.input}
              type="date"
              placeholder="00.00.0000"
            />
          </div>
          <div>
            <div className={s.label}>Telefon nomer</div>
            <Input
              required="this input required"
              value={userData.number}
              onChange={(e) => {
                if (!e.target.value.includes("+998")) {
                  e.target.value = "+998";
                }
                setUserData({ ...userData, number: e.target.value });
              }}
              className={s.input}
              placeholder="+998"
            />
          </div>
        </div>
        <div className={s.label}>Email</div>
        <Input
          type="email"
          required="this input required"
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
          Platformamizda ro‘yhatdan o‘tganmisiz?
          <Link to="/login"> Kirish</Link>
        </div>
      </form>
    </FormWrapper>
  );
};

export default RegisterPage;

