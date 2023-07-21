import React from "react";

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__about-project">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__caption">
            <p className="footer__date">© 2023</p>
            <p className="footer__service">Яндекс.Практикум</p>
            <p className="footer__service">Github</p>
            </div>
        </footer>
    );
}

export default Footer;