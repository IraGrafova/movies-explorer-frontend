import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Header.css";

import logo from "../../images/logo.png";

function Header() {
  let location = useLocation();

  return (
    <header className="header">
      {location.pathname === "/signup" && (
        <div>
          <img src={logo} className="header__logo" alt="Логотип" />
          <p className="header__title">Добро пожаловать!</p>
        </div>
      )}

      {location.pathname === "/signin" && (
        <div>
          <img src={logo} className="header__logo" alt="Логотип" />
          <p className="header__title">Рады видеть!</p>
        </div>
      )}

      {location.pathname === "/" && (
        <div className="header__about-project">
          <img src={logo} className="header__logo" alt="Логотип" />
          <div className="header__links">
            <NavLink to="/signin" className="header__link">
              Регистрация
            </NavLink>
            <NavLink to="/signin" className="header__link">
              Войти
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );

  //     <NavLink to="/signin" className="header__link" onClick={signOut}>
  //     Регистрация
  // </NavLink>
  // <NavLink to="/signin" className="header__link" onClick={signOut}>
  //     Войти
  // </NavLink>
}

export default Header;
