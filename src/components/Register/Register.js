import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <section>
      <form className="authorization-form">
        <h1 className="authorization-form__title">Добро пожаловать!</h1>
        <label htmlFor="name" className="authorization-form__label">
          Имя
        </label>
        <input
          id="name"
          type="text"
          name="name"
          // value={formValue.email}
          // onChange={handleChange}
          className="authorization-form__input"
        ></input>
        <label htmlFor="email" className="authorization-form__label">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          // value={formValue.email}
          // onChange={handleChange}
          className="authorization-form__input"
        ></input>
        <label htmlFor="password" className="authorization-form__label">
          Пароль
        </label>
        <input
          id="password"
          type="password"
          name="password"
          // value={formValue.password}
          // onChange={handleChange}
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
  );
}
export default Register;
