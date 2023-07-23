import React from "react";

import './AboutMe.css';

import myPhoto from '../../images/photo_me.jpg';
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__heading">Студент</h2>
      <img className="about-me__photo" src={myPhoto} alt='Мое фото' />
      <h3 className="about-me__title">Ирина</h3>
      <h4 className="about-me__info">Фронтенд-разработчик, 27 лет</h4>
      <p className="about-me__description">
        Я родилась в городе Гуково, а живу в Санкт-Петербурге, закончила
        факультет ИКСС в СПБГУТ. У меня есть муж и дочь. Я люблю слушать музыку,
        а ещё делать вещи своими руками. Недавно начала кодить. С 2016 года
        работала в компании «Нии Масштаб». После того, как пройду курс по
        веб-разработке, хочу сменить свою постоянную работу и иметь возможность
        работать удаленно.
      </p>
      <a href="https://github.com/IraGrafova" class="about-me__github" target="_blank" rel="noopener noreferrer">Github</a>
    </section>
  );
}

export default AboutMe;
