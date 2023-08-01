import React from "react";

import "./MoviesCard.css";

function MoviesCard({ card }) {
  //console.log(card)
  return (
    <li className="movies-card">
      <img className="movies-card__picture" src={card.url} alt={card.nameRU} />
      <div className="movies-card__label">
      <div className="movies-card__about">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__duration">{card.duration}</p>
      </div>
        <button
          className="movies-card__like"
          type="button"
          // onClick={handleLikeClick}
        ></button>
        </div>
    </li>
  );
}

export default MoviesCard;
