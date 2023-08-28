import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Profile.css";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../Hooks/useValidate";
import "../Hooks/useValidate.css";

function Profile({ setCurrentUser, setLoggedIn }) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setIsValid,
    errRegister,
    setErrRegister,
  } = useFormWithValidation();

  React.useEffect(() => {
    if (
      (currentUser.name === values.name) &
      (currentUser.email === values.email)
    ) {
      setIsValid(false);
    }
  }, [currentUser.email, currentUser.name, setIsValid, values]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const { name, email } = values;

    MainApi.changeUserInfo({ name, email })
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrRegister("Пользователь с таким email уже существует.");
        } else {
          setErrRegister("При регистрации пользователя произошла ошибка.");
        }
      });
  }

  React.useEffect(() => {
    setValues((values) => ({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    }));
  }, [currentUser, setValues]);

  function handleLogout() {
    MainApi.logout()
      .then(() => {
        navigate("/");
        localStorage.clear();
        setLoggedIn(false);
      })
      .catch((err) => {
        setErrRegister("Ошибка выхода из аккаунта");
      });
  }

  return (
    <main className="profile">
      <section>
        <form className="profile-form" onSubmit={handleSubmit}>
          <h2 className="profile-form__title">Привет, {currentUser.name}!</h2>
          <div className="profile-form__area profile-form__area_name">
            <div className="profile-form__area-container">
              <label htmlFor="name" className="profile-form__label">
                Имя
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={currentUser.name}
                defaultValue={currentUser.name}
                onChange={handleChange}
                className={
                  errors["name"]
                    ? "profile-form__input error-input"
                    : "profile-form__input"
                }
                pattern="[a-zA-Zа-яА-ЯёЁ\-\s]+"
                required
                minLength="2"
                maxLength="30"
              ></input>
            </div>
            <span className="error">{errors["name"]}</span>
          </div>
          <div className="profile-form__area profile-form__area_email">
            <div className="profile-form__area-container">
              <label htmlFor="email" className="profile-form__label">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={currentUser.email}
                onChange={handleChange}
                required
                className={
                  errors["email"]
                    ? "profile-form__input error-input"
                    : "profile-form__input"
                }
                placeholder={currentUser.email}
                pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
              ></input>
            </div>
            <span className="error">{errors["email"]}</span>
            <span className="error error-center">{errRegister}</span>
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className={
              !isValid
                ? "profile-form__submit_disabled profile-form__submit"
                : "profile-form__submit"
            }
          >
            Редактировать
          </button>
          <button
            type="submit"
            className="profile-form__signout"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </main>
  );
}
export default Profile;
