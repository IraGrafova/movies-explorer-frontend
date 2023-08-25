import React from "react";

import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import * as MainApi from "../../utils/MainApi";

function SavedMovies({ savedCards, isShort, dataSearch, onLike }) {
  console.log(dataSearch)

  const [searchedMovie, setSearchedMovie] = React.useState([]);

  React.useEffect(() => {
    dataSearch = ''
  }, [])

  React.useEffect(() => {
    const filteredMovies = savedCards.filter((card) =>
      isShort
        ? (card.nameRU.toLowerCase().includes(dataSearch) ||
            card.nameEN.toLowerCase().includes(dataSearch)) &&
          card.duration < 60
        : card.nameRU.toLowerCase().includes(dataSearch) ||
          card.nameEN.toLowerCase().includes(dataSearch)
    );
    setSearchedMovie(filteredMovies);
    localStorage.setItem("filteredSavedMovies", JSON.stringify(filteredMovies));
  }, [isShort, dataSearch, savedCards]);

  React.useEffect(() => {
    const filteredMovies = JSON.parse(localStorage.getItem("filteredSavedMovies"));
    setSearchedMovie(filteredMovies);
  }, [dataSearch, isShort]);

  // const movie = JSON.parse(localStorage.getItem('savedCards'))
  console.log(searchedMovie.length);
  return (
    <main className="movies">
      <section>
      {/* <ul className="movies-list">
            {savedCards ? (
              savedCards.map((card) => (
                <MoviesCard key={card.id} card={card} savedCards={savedCards} />
              ))
            ) : (
              <p>Сохраненные фильмы отсутствуют</p>
            )}
          </ul> */}


        {dataSearch ? (
          <ul className="movies-list">
            {
            searchedMovie.length > 0 ? (
              searchedMovie.map((card) => (
                <MoviesCard key={card.id} card={card} savedCards={savedCards} onLike={onLike}/>
              ))
            ) : (
              <p>Ничего не найдено</p>
            )
          }
          </ul>
        ) : (
          <ul className="movies-list">
            {savedCards ? (
              savedCards.map((card) => (
                <MoviesCard key={card.id} card={card} savedCards={savedCards} onLike={onLike}/>
              ))
            ) : (
              <p>Сохраненные фильмы отсутствуют</p>
            )}
          </ul>
        )}
      </section>
    </main>
  );
}

export default SavedMovies;
