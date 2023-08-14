import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";


function Navigation({isOpen, onClose}) {

  return (
    <div className={`nav-background ${isOpen ? 'nav-background_visibility' : ''}`} /* nav-background_visibility*/>
      <nav className="nav">
        <div className="nav__window">
          <button className="nav__close" type="button" onClick={onClose}></button>
          <ul className="nav__links">
            <li className="nav__link-item">
              <NavLink to="/movies" className="nav__link nav__link_none">
                Главная
              </NavLink>
            </li>
            <li className="nav__link-item nav__link-item_active">
              <NavLink to="/movies" className="nav__link ">
                Фильмы
              </NavLink>
            </li>
            <li className="nav__link-item">
              <NavLink to="/saved-movies" className="nav__link">
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/profile" className="nav__link-profile">
          Аккаунт<span className="nav__link-icon"></span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
