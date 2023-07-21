import React from "react";

import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2> 
            <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </section>
    );
}

export default AboutProject;