import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css";
import * as MainApi from "../../utils/MainApi";
import { useFormWithValidation } from "../Hooks/useValidate";
import "../Hooks/useValidate.css";

function Register({ handleLogin }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    setIsValid,
    errRegister,
    setErrRegister,
  } = useFormWithValidation();

  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { name, email, password } = values;
    MainApi.register({ name, email, password })
      .then((data) => {
        MainApi.login({ email, password }).then(() => {
          handleLogin();
          navigate("/movies");
        });
      })
      .catch((err) => {
        if (err.status === 400) {
          setErrRegister("Вы ввели неправильный логин или пароль.");
        } else if (err.status === 401) {
          setErrRegister(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
        } else setErrRegister("При авторизации произошла ошибка");
        setIsValid(false);
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrRegister("Пользователь с таким email уже существует.");
        } else {
          setErrRegister("При регистрации пользователя произошла ошибка.");
        }
        setIsValid(false);
      });
  }

  return (
    <main className="register">
      <section>
        <form onSubmit={handleSubmit} className="authorization-form">
          <h1 className="authorization-form__title">Добро пожаловать!</h1>
          <label htmlFor="name" className="authorization-form__label">
            Имя
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="30"
            value={values.name ?? ""}
            onChange={handleChange}
            className={
              errors["name"]
                ? "authorization-form__input error-input"
                : "authorization-form__input"
            }
            pattern="[a-zA-Zа-яА-ЯёЁ\-\s]+"
          ></input>
          <span className="error">{errors["name"]}</span>
          <label htmlFor="email" className="authorization-form__label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={values.email ?? ""}
            onChange={handleChange}
            pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
            placeholder="E-mail"
            className={
              errors["email"]
                ? "authorization-form__input error-input"
                : "authorization-form__input"
            }
          ></input>
          <span className="error">{errors["email"]}</span>
          <label htmlFor="password" className="authorization-form__label">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            required
            minLength="8"
            maxLength="30"
            value={values.password ?? ""}
            onChange={handleChange}
            className={
              errors["password"]
                ? "authorization-form__input error-input"
                : "authorization-form__input"
            }
          ></input>
          <span className="error">{errors["password"]}</span>
          <span className="error error-center">{errRegister}</span>
          <button
            type="submit"
            disabled={!isValid}
            className={
              !isValid
                ? "authorization-form__submit-register_disabled authorization-form__submit-register"
                : "authorization-form__submit-register"
            }
          >
            Зарегистрироваться
          </button>
          <NavLink to="/signin" className="authorization-form__signin">
            Уже зарегистрированы?{" "}
            <span className="authorization-form__signin-span">Войти</span>
          </NavLink>
        </form>
      </section>
    </main>
  );
}
export default Register;
