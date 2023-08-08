import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Navigation.css";

import logo from "../../images/logo.png";

function Navigation() {
  let location = useLocation();

  return (
    <div className="nav-background">
      <nav className="nav">
        <div className="nav__window">
          <button className="nav__close"></button>
          <div className="nav__links">
            <NavLink to="/movies" className="nav__link">
              Главная
            </NavLink>
            <NavLink to="/movies" className="nav__link nav__link_active">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="nav__link">
              Сохраненные фильмы
            </NavLink>
          </div>
        </div>
        <NavLink to="/profile" className="nav__link-profile">
          Аккаунт<span className="nav__link-icon"></span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
