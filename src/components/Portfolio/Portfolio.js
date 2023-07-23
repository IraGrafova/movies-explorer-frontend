import React from "react";

import './Portfolio.css';

function Portfolio() {
    return (
    <section className='portfolio'>
      <h2 className="portfolio__heading">Портфолио</h2>

      <a href="https://github.com/IraGrafova/how-to-learn" class="portfolio__github" target="_blank" rel="noopener noreferrer">Статичный сайт<span class="portfolio__github-pointer">↗</span></a>
      <a href="https://github.com/IraGrafova/russian-travel" class="portfolio__github" target="_blank" rel="noopener noreferrer">Адаптивный сайт<span class="portfolio__github-pointer">↗</span></a>
      <a href="https://github.com/IraGrafova/react-mesto-api-full-gha" class="portfolio__github" target="_blank" rel="noopener noreferrer">Одностраничное приложение<span class="portfolio__github-pointer">↗</span></a>

    </section>
    )
}

export default Portfolio;