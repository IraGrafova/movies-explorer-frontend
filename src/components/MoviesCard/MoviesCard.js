import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ card, isLiked, onCardLike }) {

  let location = useLocation();


  // console.log(card)

  function handleLikeClick() {
    console.log('like2')
    onCardLike(card);
  }


  return (
    <li className="movies-card">
      <img className="movies-card__picture" src={'https://api.nomoreparties.co/'+card.image.url} alt={card.nameRU} />
      <div className="movies-card__label">
        <div className="movies-card__about">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{`${card.duration > 60 ? (Math.floor(card.duration/60)+'ч') : ''} ${card.duration % 60}м`}</p>
        </div>
        {location.pathname === "/movies" && (
          <button
            className={`movies-card__like ${
              isLiked && "movies-card__like_active"
            }`}
            type="button"
            onClick={handleLikeClick}
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
