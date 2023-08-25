import React from "react";
import { useLocation } from "react-router-dom";

import "./Footer.css";

function Footer() {
  let location = useLocation();

  return (
    (location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies") && (
      <footer className="footer">
        <h2 className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__caption">
          <div className="footer__services">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com"
              className="footer__service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <p className="footer__date">© 2023</p>
        </div>
      </footer>
    )
  );
}

export default Footer;
