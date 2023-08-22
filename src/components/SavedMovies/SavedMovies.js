import React from "react";

import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import * as MainApi from '../../utils/MainApi';

function SavedMovies({loggedIn}) {
  const [cards, setCards] = React.useState([]);
console.log('savedcard')

React.useEffect(() => {
    MainApi.getMovies()
      .then((data) => {
        console.log(data)
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

let isLiked;

// console.log(isLiked)
    function handleLike (card) {

      console.log('like')
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


return(
  <main className="movies">
    <SearchForm />
    {/* <MoviesCardList /> */}
    <section>
          <ul className="movies-list">
            {
             cards.length > 0 ?
            (cards.map((card) => (
              <MoviesCard key={card.id} card={card} isLiked={isLiked} onCardLike={handleLike}/>
            ))) : <p>Сохраненные карточки отсутствуют</p>
            }
          </ul>
    </section>

  </main>
)

}

export default SavedMovies;