import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ card, onLike, savedCards, onDelete}) {

  let location = useLocation();

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем

  const isLiked = savedCards.some((item) =>
  card.id === item.id
)

function handleLikeClick() {
  onLike(card);
}

// function handleDeleteClick() {
//   onDelete(card);
// };

// нажали на лайк = проверяем есть ли карточка в массиве сохраненных = если нет то кнопка красная
  return (
    <li className="movies-card">
      <img className="movies-card__picture" src={location.pathname === '/movies' ? 'https://api.nomoreparties.co/'+card.image.url : card.image} alt={card.nameRU} />
      <div className="movies-card__label">
        <div className="movies-card__about">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{`${card.duration > 60 ? (Math.floor(card.duration/60)+'ч') : ''} ${card.duration % 60}м`}</p>
        </div>
        {location.pathname === "/movies" && (
          <button
            className={`movies-card__like ${
              (isLiked && "movies-card__like_active")
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
