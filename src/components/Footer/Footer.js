import React from "react";

import './Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <p>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__caption">
            <p className="footer__date">© 2023</p>
            <p className="footer__yandex">Яндекс.Практикум</p>
            <p className="footer__github">Github</p>
            </div>
        </footer>
    );
}

export default Footer;