import React from "react";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__list">
        <li>
          <a
            href="https://github.com/IraGrafova/how-to-learn"
            className="portfolio__github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт<span className="portfolio__github-pointer">↗</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IraGrafova/russian-travel"
            className="portfolio__github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт<span className="portfolio__github-pointer">↗</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/IraGrafova/react-mesto-api-full-gha"
            className="portfolio__github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
            <span className="portfolio__github-pointer">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
