import { useEffect, useRef, useState } from "react";
import Container from "../../components/ui/Container/Container";
import s from "./UserPage.module.scss";
import img from "./../../assets/img/acc.svg";
import { useLocalizedText } from "../../hook/useLocalizedText";
import Input from "antd/es/input/Input";
import moment from "moment";
import MyButton from "../../components/ui/MyButton/MyButton";
import Upload from "antd/es/upload/Upload";
import UploadFile from "../../components/ui/Upload/Upload";
import FT_API from "../../api/api";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const langChange = useLocalizedText();
  const content = {
    surname: "Familiya",
    surname_ru: "Фамилия",
    name: "Ism",
    name_ru: "Имя",
    phone: "Telefon",
    phone_ru: "Телефон",
    email: "Email",
    email_ru: "Email",
    password: "Parol",
    password_ru: "Пароль",
    was_born_date: "Tug'ilgan sana",
    was_born_date_ru: "Дата рождения",
    avatar: "Rasm",
    avatar_ru: "Фото",
    save: "Saqlash",
    save_ru: "Сохранить",
  };
  const [user, setUser] = useState({
    create_data: "",
    email: "",
    id: "",
    image: "",
    name: "",
    password: "",
    phone: "",
    role: "",
    surname: "",
    was_born_date: "",
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetch() {
      try {
        const res = await FT_API.get("/Users/one");
        setUser(await res.data);
      } catch (error) {
        if (error.response.status == 400) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    }
    fetch();
  },[]);

  return (
    <Container>
      <div className={s.row}>
        <div className={s.img}>
          <img width={200} src={img} alt="avatar" />
        </div>
        <form className={s.info}>
          <div className={s.item}>
            <div className={s.label}> {content[langChange("surname")]}</div>
            <div className={s.value}>
              <Input
                value={user.surname}
                onChange={(e) => {
                  setUser({ ...user, surname: e.target.value });
                }}
                required
                placeholder={content[langChange("surname")]}
              />
            </div>
          </div>
          <div className={s.item}>
            <div className={s.label}> {content[langChange("name")]}</div>
            <div className={s.value}>
              <Input
                required
                value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
                placeholder={content[langChange("name")]}
              />
            </div>
          </div>
          <div className={s.item}>
            <div className={s.label}> {content[langChange("phone")]}</div>
            <div className={s.value}>
              <Input
                value={user.phone}
                required="this input required"
                onChange={(e) => {
                  if (e.target.value.slice(0, 4) !== "+998") {
                    e.target.value = "+998";
                  } else if (e.target.value.length > 11) {
                    e.target.value = e.target.value.slice(0, 13);
                  }
                  setUser({ ...user, phone: e.target.value });
                }}
                className={s.input}
                placeholder="+998"
              />
            </div>
          </div>
          <div className={s.item}>
            <div className={s.label}> {content[langChange("email")]}</div>
            <div className={s.value}>
              <Input
                required
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Введите корректный email"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                placeholder={content[langChange("email")]}
              />
            </div>
          </div>
          <div className={s.item}>
            <div className={s.label}> {content[langChange("password")]}</div>
            <div className={s.value}>
              <Input.Password
                required="this input required"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                className={s.input}
                placeholder={content[langChange("password")]}
              />
            </div>
          </div>
          <div className={s.item}>
            <div className={s.label}>
              {" "}
              {content[langChange("was_born_date")]}
            </div>
            <div className={s.value}>
              <Input
                required="this input required"
                value={moment(user.was_born_date, "DD.MM.YYYY").format(
                  "YYYY-MM-DD"
                )}
                onChange={(e) =>
                  setUser({
                    ...user,
                    was_born_date: moment(e.target.value, "YYYY-MM-DD").format(
                      "DD.MM.YYYY"
                    ),
                  })
                }
                className={s.input}
                type="date"
                placeholder="00.00.0000"
              />
            </div>
          </div>
          <div className={s.item}>
            <div className={s.label}> {content[langChange("avatar")]}</div>
            <div className={s.value}>
              {/* <input className="" type="file" ref={fileInputRef} accept="image/*" /> */}
              <UploadFile />
            </div>
          </div>
          <div className={s.btn}>
            <MyButton>{content[langChange("save")]}</MyButton>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default UserPage;

