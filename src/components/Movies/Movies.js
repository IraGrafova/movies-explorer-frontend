import React from "react";

import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies() {

return(
  <section className="movies">
    <SearchForm />
    {/* <Preloader /> */}
    <MoviesCardList />
  </section>
)

}

export default Movies;