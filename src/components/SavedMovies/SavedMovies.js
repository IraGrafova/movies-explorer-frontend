import React from "react";

import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies({ savedCards, isShort, dataSearch, onLike }) {
  const [searchedMovie, setSearchedMovie] = React.useState([]);

  React.useEffect(() => {
    dataSearch = "";
  }, []);

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
    localStorage.setItem("filteredSavedMovies", JSON.stringify(filteredMovies));
  }, [isShort, dataSearch, savedCards]);

  React.useEffect(() => {
    const filteredMovies = JSON.parse(
      localStorage.getItem("filteredSavedMovies")
    );
    setSearchedMovie(filteredMovies);
  }, [dataSearch, isShort]);

  return (
    <main className="movies">
      <section>
        {dataSearch ? (
          <ul className="movies-list">
            {searchedMovie.length > 0 ? (
              searchedMovie.map((card) => (
                <MoviesCard
                  key={card.id}
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
                  key={card.id}
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
