import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Header.css";

import logo from "../../images/logo.png";

function Header() {
  let location = useLocation();

  return (
    <header className="header header_authorization">
      {location.pathname === "/signup" && (
        <div>
          <img src={logo} className="header__logo-authorization" alt="Логотип" />
        </div>
      )}

      {location.pathname === "/signin" && (
        <div>
          <img src={logo} className="header__logo" alt="Логотип" />
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

      {((location.pathname === "/movies")||(location.pathname === "/saved-movies")) && (
        <div className="header__movie">
          <img src={logo} className="header__logo" alt="Логотип" />
          <button className="header__menu"></button>
          <div className="header__navigation">
          <NavLink to="/movies" className="header__navigation-link">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="header__navigation-link">
              Сохраненные фильмы
            </NavLink>
            <NavLink to="/profile" className="header__navigation-link">
              Аккаунт<span className="header__navigation-link-icon"></span>
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
