import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  dataSearch,
  isShort,
  onLike,
  savedCards,
  movies,
  setMovies,
  cardToView,
  setCardToView,
  windowWidth,
  listenResize,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchMovies, setSearchMovies] = React.useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );

  React.useEffect(() => {
    const filteredMovies = movies.filter((card) =>
      JSON.parse(isShort)
        ? (card.nameRU.toLowerCase().includes(dataSearch) ||
            card.nameEN.toLowerCase().includes(dataSearch)) &&
          card.duration < 40
        : card.nameRU.toLowerCase().includes(dataSearch) ||
          card.nameEN.toLowerCase().includes(dataSearch)
    );
    setSearchMovies(filteredMovies);
    localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    filteredMovies.length > 0 && setIsLoading(true);
  }, [dataSearch, isShort, movies]);

  function handleAddMovies() {
    if (window.screen.width > windowWidth) {
      setCardToView(cardToView + 7);
    } else if (window.screen.width < windowWidth) {
      setCardToView(cardToView + 5);
    }
  }

  return (
    <section>
      {isLoading ? (
        <>
          <ul className="movies-list">
            {searchMovies.length > 0 ? (
              searchMovies
                .slice(0, cardToView)
                .map((card) => (
                  <MoviesCard
                    key={card.id}
                    card={card}
                    onLike={onLike}
                    savedCards={savedCards}
                  />
                ))
            ) : (
              <p className="movies-list__none">Ничего не найдено</p>
            )}
          </ul>
          <button
            className={`${
              searchMovies.length > cardToView
                ? "movies-button"
                : "movies-button_disable"
            }`}
            type="submit"
            onClick={handleAddMovies}
          >
            Ещё
          </button>
        </>
      ) : (
        <Preloader />
      )}
    </section>
  );
}

export default MoviesCardList;
