import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <main className="not-found">
      <section className="not-found__info">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__description">Страница не найдена</p>
      </section>
      <button className="not-found__back" onClick={goBack} type="button" replace={'true'}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
