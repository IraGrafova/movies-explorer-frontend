import "./Login.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as MainApi from "../../utils/MainApi";
import { useFormWithValidation } from "../Hooks/useValidate";
import "../Hooks/useValidate.css";

function Login({ handleLogin }) {
  const navigate = useNavigate();

  const {
    values,
    handleChange,
    errors,
    isValid,
    setIsValid,
    errRegister,
    setErrRegister,
  } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = values; // то же самое что formValue.email И formValue.password писать в следующей строке, просто упростили запись, вытащив переменные
    MainApi.login({ email, password })
      .then(() => {
        handleLogin();
        navigate("/movies");
        handleChange();
      })
      .catch((err) => {
        if (err.status === 400) {
          setErrRegister("Вы ввели неправильный логин или пароль.");
        } else if (err.status === 401) {
          setErrRegister(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
        }
        setIsValid(false);
      });
  }

  return (
    <main className="login">
      <section>
        <form onSubmit={handleSubmit} className="authorization-form">
          <h1 className="authorization-form__title">Рады видеть!</h1>
          <label htmlFor="email" className="authorization-form__label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            required
            pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
            value={values.email ?? ""}
            onChange={handleChange}
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
                ? "authorization-form__submit_disabled authorization-form__submit-register"
                : "authorization-form__submit"
            }
          >
            Войти
          </button>
          <NavLink to="/signup" className="authorization-form__signin">
            Ещё не зарегистрированы?{" "}
            <span className="authorization-form__signin-span">Регистрация</span>
          </NavLink>
        </form>
      </section>
    </main>
  );
}
export default Login;
