import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Header.css";

import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  let location = useLocation();

  return (
    <header className="header header_authorization">
      {(location.pathname === "/signup" || location.pathname === "/signin") && (
        <div>
          <NavLink to="/">
            <img
              src={logo}
              className="header__logo-authorization"
              alt="Логотип"
            />
          </NavLink>
        </div>
      )}

      {location.pathname === "/" && (
        <div className="header__about-project">
          <NavLink to="/">
            <img
              src={logo}
              className="header__logo"
              alt="Логотип"
            />
          </NavLink>
          <nav className="header__links">
            <NavLink to="/signin" className="header__link">
              Регистрация
            </NavLink>
            <NavLink to="/signin" className="header__link">
              Войти
            </NavLink>
          </nav>
        </div>
      )}

      {(location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile") && (
        <div className="header__movie">
          <NavLink to="/">
            <img
              src={logo}
              className="header__logo"
              alt="Логотип"
            />
          </NavLink>
          <button className="header__menu" type="button"></button>
          <Navigation />
        </div>
      )}
    </header>
  );
}

export default Header;
