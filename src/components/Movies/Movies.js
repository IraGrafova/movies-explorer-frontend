import React from "react";
import { useLocation } from "react-router-dom";

import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";
import * as MainApi from "../../utils/MainApi";

function Movies() {
  const [search, setSearch] = React.useState(
    localStorage.getItem("dataSearch") || ""
  );
  const [searchSavedMovies, setSearchSavedMovies] = React.useState("");
  const [isShort, setIsShort] = React.useState(
    localStorage.getItem("isShort") || false
  );

  console.log(isShort)

  const [savedCards, setSavedCards] = React.useState([]);

  let location = useLocation();

  function handleSearchMovies(dataSearch) {
    const value = dataSearch;
    setSearch(value);
    setSearchSavedMovies(value);
    JSON.stringify(localStorage.setItem("dataSearch", value));
  }

  function handleSearchSavedMovies(dataSearch) {
    const value = dataSearch;
    setSearchSavedMovies(value);
  }

  function handleIsShort(check) {
    const value = check;
    setIsShort(value);
    JSON.stringify(localStorage.setItem("isShort", value));
  }

  React.useEffect(() => {
    MainApi.getMovies()
      .then((data) => {
        setSavedCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleLike(card) {
    const isLiked = savedCards.some((item) => card.movieId === item.movieId);

    if (!isLiked) {
      MainApi.saveMovies(card)
        .then((newCard) => {
          setSavedCards([newCard, ...savedCards]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const likedCard = savedCards.find(
        (item) => card.movieId === item.movieId
      );

      MainApi.deleteMovies(likedCard._id)
        .then(() => {
          console.log(card.id);
          setSavedCards((savedCards) =>
            savedCards.filter((item) => item.movieId !== card.movieId)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSearchMovies}
        onSubmitSavedSearch={handleSearchSavedMovies}
        isShort={isShort}
        setIsShort={setIsShort}
        onCheck={handleIsShort}
        setSearch={setSearch}
      />
      {location.pathname === "/movies" && (
        <MoviesCardList
          dataSearch={search.toLowerCase()}
          isShort={isShort}
          onLike={handleLike}
          savedCards={savedCards}
        />
      )}
      {location.pathname === "/saved-movies" && (
        <SavedMovies
          dataSearch={searchSavedMovies.toLowerCase()}
          savedCards={savedCards}
          isShort={isShort}
          onLike={handleLike}
        />
      )}
    </main>
  );
}

export default Movies;
