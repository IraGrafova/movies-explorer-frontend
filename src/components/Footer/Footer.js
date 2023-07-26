import React from "react";

import "./Footer.css";

function Footer() {
  return (
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
  );
}

export default Footer;
