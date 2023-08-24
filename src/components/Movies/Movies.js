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
  const [searchSavedMovies, setSearchSavedMovies] = React.useState('');
  const [isShort, setIsShort] = React.useState(
    localStorage.getItem("isShort") || false
  );
  const [savedCards, setSavedCards] = React.useState([]);
  // console.log(isShort)

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
    // console.log(check)
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
    console.log("like");
    // console.log(card.id)
    console.log(card);
    const isLiked = savedCards.some((item) => card.id === item.id);
    // console.log('isLiked '+isLiked)
    // card.image = "https://api.nomoreparties.co/" + card.image.url;

    const newCard = {
      country: card.country,
      description: card.description,
      director: card.director,
      duration: card.duration,
      id: card.id,
      image: "https://api.nomoreparties.co/" + card.image.url,
      nameEN: card.nameEN,
      nameRU: card.nameRU,
      trailerLink: card.trailerLink,
      year: card.year,
    };
    if (!isLiked) {

      MainApi.saveMovies(newCard)
        .then((newCard) => {
          // newCard.image = "https://api.nomoreparties.co/" + card.image.url;
          const value =  savedCards
          console.log(value)
          setSavedCards([newCard, ...savedCards]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {

      MainApi.deleteMovies(newCard.id)
        .then(() => {
          setSavedCards((savedCards) =>
            savedCards.filter((item) => item.id !== card.id)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
console.log(savedCards)
// const id = savedCards.find((item) => item.id === card.id)._id;
  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSearchMovies}
        onSubmitSavedSearch = {handleSearchSavedMovies}
        isShort={isShort}
        onCheck={handleIsShort}
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
        />
      )}
    </main>
  );
}

export default Movies;
