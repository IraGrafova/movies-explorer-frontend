import React from "react";

import "./NavTab.css";

function NavTab() {
  return (
    <section className="navigation">
      <nav>
        <ul className="navigation__list">
          <li>
            <a href="#about-project" className="navigation__link">
              О проекте
            </a>
          </li>
          <li>
            <a href="#techs" className="navigation__link">
              Технологии
            </a>
          </li>
          <li>
            <a href="#about-me" className="navigation__link">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
