import "./Login.css";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as MainApi from '../../utils/MainApi';

function Login({ handleLogin }) {

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }


  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = formValue; // то же самое что formValue.email И formValue.password писать в следующей строке, просто упростили запись, вытащив переменные
    MainApi.login({ email, password })
      .then(() => {
          handleLogin();
          navigate("/movies");
      })
      .catch((err) => console.log(err));
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
          value={formValue.email}
          onChange={handleChange}
          className="authorization-form__input"
        ></input>
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
          value={formValue.password}
          onChange={handleChange}
          className="authorization-form__input"
        ></input>
        <button type="submit" className="authorization-form__submit">
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
