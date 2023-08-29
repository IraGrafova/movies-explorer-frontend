import React from "react";

import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies({ savedCards, isShort, dataSearch, onLike }) {
  const [searchedMovie, setSearchedMovie] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const filteredMovies = savedCards.filter((card) =>
      isShort
        ? (card.nameRU.toLowerCase().includes(dataSearch) ||
            card.nameEN.toLowerCase().includes(dataSearch)) &&
          card.duration < 40
        : card.nameRU.toLowerCase().includes(dataSearch) ||
          card.nameEN.toLowerCase().includes(dataSearch)
    );

    setSearchedMovie(filteredMovies);
  }, [isShort, dataSearch, savedCards]);

  React.useEffect(() => {
    searchedMovie.length > 0 && setIsLoading(true);
  }, [searchedMovie]);

  return (
    <main className="movies">
      <section>
        {isLoading ? (
          <ul className="movies-list">
            {searchedMovie?.length > 0 ? (
              searchedMovie.map((card) => (
                <MoviesCard
                  key={card.movieId}
                  card={card}
                  savedCards={savedCards}
                  onLike={onLike}
                />
              ))
            ) : (
              <p className="movies-list_none">Ничего не найдено</p>
            )}
          </ul>
        ) : (
          <ul className="movies-list">
            {savedCards.length > 0 ? (
              savedCards.map((card) => (
                <MoviesCard
                  key={card.movieId}
                  card={card}
                  savedCards={savedCards}
                  onLike={onLike}
                />
              ))
            ) : (
              <p className="movies-list_none">Сохраненные фильмы отсутствуют</p>
            )}
          </ul>
        )}
      </section>
    </main>
  );
}

export default SavedMovies;
