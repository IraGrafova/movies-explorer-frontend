import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css";
import * as MainApi from '../../utils/MainApi';

function Register() {

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const { name, email, password } = formValue;
    MainApi.register({ name, email, password })
      .then(() => {
        navigate("/signin");
      })
      .catch(() => {
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
            value={formValue.name}
            onChange={handleChange}
            className="authorization-form__input"
          ></input>
          <label htmlFor="email" className="authorization-form__label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formValue.email}
            onChange={handleChange}
            placeholder="E-mail"
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
          <button type="submit" className="authorization-form__submit-register">
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
