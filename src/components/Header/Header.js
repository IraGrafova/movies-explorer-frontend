import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import logo from '../../images/logo.png'

function Header() {
    let location = useLocation();
    
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="Логотип" />

            {location.pathname === "/signup" && (
                <p className="Header__title">Добро пожаловать!</p>
            )}

            {location.pathname === "/signin" && (
                <p className="Header__title">Рады видеть!</p>
            )}

            {location.pathname === "/" && (
                <div className="header__links">
                 
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