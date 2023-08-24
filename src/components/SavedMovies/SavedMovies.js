import React from "react";

import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import * as MainApi from "../../utils/MainApi";

function SavedMovies({ savedCards }) {

  // const movie = JSON.parse(localStorage.getItem('savedCards'))
console.log(savedCards)
  return (
    <main className="movies">
      <SearchForm />
      {/* <MoviesCardList /> */}
      <section>
        <ul className="movies-list">
          {savedCards.map((card) => (
            <MoviesCard key={card.id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default SavedMovies;
