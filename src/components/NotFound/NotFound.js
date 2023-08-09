import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

  return (
    <section className="not-found">
      <div className="not-found__info">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__description">Страница не найдена</p>
      </div>
      <button className="not-found__back" onClick={goBack}>Назад</button>
    </section>
  );
}

export default NotFound;
