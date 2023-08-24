import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

function MoviesCardList({ dataSearch, isShort, onLike, isLiked, savedCards }) {
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [searchMovies, setSearchMovies] = React.useState([]);
  const [cardToView, setCardToView] = React.useState(
    JSON.parse(localStorage.getItem("cardToView")) || ""
  );
  const windowWidth = 768;

  function listenResize() {
    console.log(window.screen.width);
    const windowWidth = 768;
    if (window.screen.width > windowWidth) {
      setCardToView(4);
      localStorage.setItem("cardToView", JSON.stringify(4));
    } else if (window.screen.width < windowWidth) {
      setCardToView(5);
      localStorage.setItem("cardToView", JSON.stringify(5));
    }
  }

  React.useEffect(() => {
    if (movies.length === 0) {
      MoviesApi.getMovies()
        .then((data) => {
          localStorage.setItem("movies", JSON.stringify(data));
          setMovies(data);
          listenResize();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    window.addEventListener("resize", listenResize);

    return () => {
      window.removeEventListener("resize", listenResize);
    };
  }, []);

  React.useEffect(() => {
    const filteredMovies = movies.filter((card) =>
      isShort
        ? (card.nameRU.toLowerCase().includes(dataSearch) ||
            card.nameEN.toLowerCase().includes(dataSearch)) &&
          card.duration < 60
        : card.nameRU.toLowerCase().includes(dataSearch) ||
          card.nameEN.toLowerCase().includes(dataSearch)
    );
    setSearchMovies(filteredMovies);
    localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
  }, [dataSearch, isShort]);

  React.useEffect(() => {
    const filteredMovies = JSON.parse(localStorage.getItem("filteredMovies"));
    setSearchMovies(filteredMovies);
  }, [dataSearch, isShort]);


  //     function handleLike () {
  //   // если кликнули на сердечко то отправляется запрос к нашему апи на сохранение фильма, передаем фильм в сохраненные, сердечко горит красным
  // // нужно проверить лайкнуто ли сердечко

  function handleAddMovies() {
    if (window.screen.width > windowWidth) {
      setCardToView(cardToView + 4);
    } else if (window.screen.width < windowWidth) {
      setCardToView(cardToView + 5);
    }
  }

  return (
    <section>
      {dataSearch ? (
        <>
          <ul className="movies-list">
            {searchMovies.length > 0 ? (
              searchMovies
                .slice(0, cardToView)
                .map((card) => (
                  <MoviesCard
                    key={card.id}
                    card={card}
                    onLike={onLike}
                    savedCards={savedCards}
                  />
                ))
            ) : (
              <p>Ничего не найдено</p>
            )}
          </ul>
          <button
            className={`${
              searchMovies.length > cardToView
                ? "movies-button"
                : "movies-button_disable"
            }`}
            type="submit"
            onClick={handleAddMovies}
          >
            Ещё
          </button>
        </>
      ) : (
        <Preloader />
      )}
    </section>
  );
}

export default MoviesCardList;
