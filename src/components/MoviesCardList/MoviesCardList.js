import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import movies from "../../MoviesArr";

function MoviesCardList() {
  return (
    <section>
      <ul className="movies-list">
        {movies.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>
      <button className="movies-button" type="submit">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
