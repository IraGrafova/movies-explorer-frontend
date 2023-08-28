import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Navigation.css";

function Navigation({ isOpen, onClose }) {
  let location = useLocation();

  return (
    <div
      className={`nav-background ${
        isOpen ? "nav-background_visibility" : ""
      }`}
    >
      <nav className={`nav ${
                location.pathname === "/" ? "nav-about" : ""
              }`}>
        <div className="nav__window">
          <button
            className="nav__close"
            type="button"
            onClick={onClose}
          ></button>
          <ul className="nav__links">
            <li className="nav__link-item">
              <NavLink
                to="/"
                className="nav__link nav__link_none"
                onClick={onClose}
              >
                Главная
              </NavLink>
            </li>
            <li
              className={`nav__link-item ${
                location.pathname === "/movies" ? "nav__link-item_active" : ""
              }`}
            >
              <NavLink to="/movies" className="nav__link " onClick={onClose}>
                Фильмы
              </NavLink>
            </li>
            <li
              className={`nav__link-item ${
                location.pathname === "/saved-movies"
                  ? "nav__link-item_active"
                  : ""
              }`}
            >
              <NavLink
                to="/saved-movies"
                className="nav__link"
                onClick={onClose}
              >
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/profile"
          className={`nav__link-profile ${
            location.pathname === "/profile" ? "nav__link-item_active" : ""
          }`}
          onClick={onClose}
        >
          Аккаунт<span className="nav__link-icon"></span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
