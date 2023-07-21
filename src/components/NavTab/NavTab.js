import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import './NavTab.css';

function NavTab() {
    return (
        <section className="navigation">
            <NavLink to="/signin" className="navigation__link" >О проекте</NavLink>
            <NavLink to="/signin" className="navigation__link" >Технологии</NavLink>
            <NavLink to="/signin" className="navigation__link" >Студент</NavLink>
        </section>
    );
}

export default NavTab;