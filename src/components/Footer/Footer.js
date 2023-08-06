import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import "./Footer.css";

function Footer() {
  let location = useLocation();

  return (



      ((location.pathname === "/")||(location.pathname === "/movies")||(location.pathname === "/saved-movies")) && (
        <footer className="footer">
            <h2 className="footer__heading">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__caption">
              <div className="footer__services">
              <p className="footer__service">Яндекс.Практикум</p>
              <p className="footer__service">Github</p>
              </div>
              <p className="footer__date">© 2023</p>
            </div>
            </footer>
            )

  );
}

export default Footer;
