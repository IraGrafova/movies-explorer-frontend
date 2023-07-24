import React from "react";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      
        <div className="about-project__block">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <div className="about-project__block">
            <h3 className="about-project__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
      <div className="about-project__grid">
        <h4 className="about-project__grid-title">1 неделя</h4>
        <h4 className="about-project__grid-title about-project__grid-title_long">
          4 недели
        </h4>
        <p className="about-project__grid-description">Back-end</p>
        <p className="about-project__grid-description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
