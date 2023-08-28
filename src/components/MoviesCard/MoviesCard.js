import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ card, onLike, savedCards, }) {
  let location = useLocation();

  const newCard = {
    country: card.country,
    description: card.description,
    director: card.director,
    duration: card.duration,
    movieId: card.id,
    image: "https://api.nomoreparties.co/" + card.image.url,
    nameEN: card.nameEN,
    nameRU: card.nameRU,
    trailerLink: card.trailerLink,
    year: card.year,
  };

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = savedCards.some((item) => newCard.movieId === item.movieId);

  function handleLikeClick() {
    location.pathname === "/movies" ? onLike(newCard) : onLike(card);
  }

  return (
    <li className="movies-card">
      <a
        href={card.trailerLink}
        className="movies-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="movies-card__picture"
          src={
            location.pathname === "/movies"
              ? "https://api.nomoreparties.co/" + card.image.url
              : card.image
          }
          alt={card.nameRU}
        />
      </a>
      <div className="movies-card__label">
        <div className="movies-card__about">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{`${
            card.duration > 60 ? Math.floor(card.duration / 60) + "ч" : ""
          } ${card.duration % 60}м`}</p>
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
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
