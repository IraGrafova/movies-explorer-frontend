import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

function MoviesCardList({ dataSearch, isShort }) {
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [searchMovies, setSearchMovies] = React.useState([]);

  React.useEffect(() => {
    if (movies.length === 0) {
      MoviesApi.getMovies()
        .then((data) => {
          localStorage.setItem("movies", JSON.stringify(data));
          setMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
  }, [dataSearch, isShort]);

  React.useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    console.log(savedMovies);
    setSearchMovies(savedMovies);
  }, [dataSearch, isShort]);

  // нужно получить массив сохраненных карточек, затем мы можем добавить состояние isLiked

  // React.useEffect(() => {

  //     MainApi.savedMovies()
  //       .then((data) => {
  //         setCards(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  // }, [loggedIn]);

  //     function handleLike () {
  //   // если кликнули на сердечко то отправляется запрос к нашему апи на сохранение фильма, передаем фильм в сохраненные, сердечко горит красным
  // // нужно проверить лайкнуто ли сердечко

  // MainApi.saveMovies( )
  // .then()
  // .catch((err) => {
  //   console.log(err);
  // })
  // }

  function handleLike(card) {
    console.log("like");
    // если кликнули на сердечко то отправляется запрос к нашему апи на сохранение фильма, передаем фильм в сохраненные, сердечко горит красным
    // нужно проверить лайкнуто ли сердечко
    // const isLiked = cards.includes(card);

    // MainApi.saveMovies(card, isLiked)
    // .then((newCard) => {
    //   setCards(
    //     (
    //       state //в state хранятся карточки из setCards
    //     ) =>
    //       state.map((oldCard) =>
    //         oldCard._id === card._id ? newCard : oldCard
    //       )
    //   )
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  }
  return (
    <section>
      {dataSearch ? (
        <>
          <ul className="movies-list">
            {searchMovies.length > 0 ? (
              searchMovies.map((card) => (
                <MoviesCard key={card.id} card={card} onCardLike={handleLike} />
              ))
            ) : (
              <p>Ничего не найдено</p>
            )}
          </ul>
          <button className="movies-button" type="submit">
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
