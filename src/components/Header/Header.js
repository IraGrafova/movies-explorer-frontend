import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Header.css";

import logo from "../../images/logo.png";
import Navigation from "../Navigation/Navigation";

function Header() {
  let location = useLocation();

  return (
    <header className="header header_authorization">
      {(location.pathname === "/signup" || location.pathname === "/signin") && (
        <div>
          <img
            src={logo}
            className="header__logo-authorization"
            alt="Логотип"
          />
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

      {(location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile") && (
        <div className="header__movie">
          <img src={logo} className="header__logo" alt="Логотип" />
          <button className="header__menu"></button>
          <Navigation />
        </div>
      )}
    </header>
  );
}

export default Header;
