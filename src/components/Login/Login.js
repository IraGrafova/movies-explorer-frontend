import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <section>
      <form className="authorization-form">
        <h1 className="authorization-form__title">Рады видеть!</h1>
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
        <button type="submit" className="authorization-form__submit">
          Войти
        </button>
        <NavLink to="/signup" className="authorization-form__signin">
          Ещё не зарегистрированы?{" "}
          <span className="authorization-form__signin-span">Регистрация</span>
        </NavLink>
      </form>
    </section>
  );
}
export default Login;
