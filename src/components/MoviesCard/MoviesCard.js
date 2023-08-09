import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ card }) {

  let location = useLocation();

  return (
    <li className="movies-card">
      <img className="movies-card__picture" src={card.url} alt={card.nameRU} />
      <div className="movies-card__label">
        <div className="movies-card__about">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{card.duration}</p>
        </div>
        {location.pathname === "/movies" && (
          <button
            className="movies-card__like"
            type="button"
          ></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className="movies-card__delete"
            type="button"
          ></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
