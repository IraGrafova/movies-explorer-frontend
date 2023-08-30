import React from "react";
import { useLocation } from "react-router-dom";

import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [search, setSearch] = React.useState(
    localStorage.getItem("dataSearch") || ""
  );
  const [searchSavedMovies, setSearchSavedMovies] = React.useState("");
  const [isShort, setIsShort] = React.useState(
    localStorage.getItem("isShort") || false
  );

  const [cardToView, setCardToView] = React.useState(
    JSON.parse(localStorage.getItem("cardToView")) || ""
  );
  const [savedCards, setSavedCards] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const windowWidth = 768;

  function listenResize() {
    const windowWidth = 768;
    if (window.screen.width > windowWidth) {
      setCardToView(7);
      localStorage.setItem("cardToView", JSON.stringify(7));
    } else if (window.screen.width < windowWidth) {
      setCardToView(5);
      localStorage.setItem("cardToView", JSON.stringify(5));
    }
  }

  let location = useLocation();

  function handleSearchMovies(dataSearch) {
    if ((dataSearch.length > 0) & (movies.length === 0)) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((data) => {
          localStorage.setItem("movies", JSON.stringify(data));
          setMovies(data);
          listenResize();
        })
        .catch((err) => {
          console.log(err);
        })
    
    .finally(() => {
      setIsLoading(false);
    });
  }

    const value = dataSearch;
    setSearch(value);
    JSON.stringify(localStorage.setItem("dataSearch", value));

    window.addEventListener("resize", listenResize);

    return () => {
      window.removeEventListener("resize", listenResize);
    };
  }

  function handleSearchSavedMovies(dataSearch) {
    const value = dataSearch;
    setSearchSavedMovies(value);
  }

  function handleIsShort(check) {
    const value = check;

    if (location.pathname === "/movies") {
      JSON.stringify(localStorage.setItem("isShort", value));
      setIsShort(value);
    } else setIsShort(value);
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

{isLoading ? <Preloader /> : 

  location.pathname === "/movies" && (
        <MoviesCardList
          dataSearch={search.toLowerCase()}
          isShort={isShort}
          onLike={handleLike}
          savedCards={savedCards}
          cardToView={cardToView}
          setCardToView={setCardToView}
          windowWidth={windowWidth}
          movies={movies}
        />
      )




}

    
      {location.pathname === "/saved-movies" && (
        <SavedMovies
          dataSearch={searchSavedMovies.toLowerCase()}
          savedCards={savedCards}
          isShort={isShort}
          onLike={handleLike}
          movies={movies}
          setSearchSavedMovies={setSearchSavedMovies}
        />
      )}
    </main>
  );
}

export default Movies;
