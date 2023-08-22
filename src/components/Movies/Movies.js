import React from "react";
import { useLocation } from "react-router-dom";

import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";

function Movies() {
  const [search, setSearch] = React.useState(localStorage.getItem("dataSearch") || '');
  const [isShort, setIsShort] = React.useState(localStorage.getItem("isShort") || false);
console.log(isShort)

  let location = useLocation();

  function handleSearchMovies(dataSearch) {
    const value = dataSearch;
    setSearch(value);
    JSON.stringify(localStorage.setItem('dataSearch', value))
  }

  function handleIsShort(check) {
    console.log(check)
    const value = check;
    setIsShort(value);
    JSON.stringify(localStorage.setItem('isShort', value))
  }

  return (
    <main className="movies">
      <SearchForm onSubmit={handleSearchMovies}  dataSearch={search} isShort={isShort} onCheck={handleIsShort}/>
      {location.pathname === "/movies" && (
        <MoviesCardList dataSearch={search.toLowerCase()} isShort={isShort} />
      )}
      {location.pathname === "/saved-movies" && (
        <SavedMovies dataSearch={search.toLowerCase()}/>
      )}


    </main>
  );
}

export default Movies;
