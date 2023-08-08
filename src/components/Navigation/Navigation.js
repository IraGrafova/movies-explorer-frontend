import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Navigation.css";

import logo from "../../images/logo.png";

function Navigation() {
  let location = useLocation();

  return (
    <div className="navigation-background">
      <nav className="navigation">
        <button className="navigation__close"></button>
        <NavLink to="/movies" className="navigation__link">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="navigation__link">
          Сохраненные фильмы
        </NavLink>
        <NavLink to="/profile" className="navigation__link">
          Аккаунт<span className="navigation__link-icon"></span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
