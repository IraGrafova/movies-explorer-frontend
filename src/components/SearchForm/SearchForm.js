import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { useFormWithValidation } from "../Hooks/useValidate";
import "../Hooks/useValidate.css";

function SearchForm({ onSubmit, isShort, setIsShort, onCheck, onSubmitSavedSearch, setSearch }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    setIsValid,
    errRegister,
    setErrRegister,
  } = useFormWithValidation();

  let location = useLocation();
  const ref = useRef();

  // const [search, setSearch] = React.useState(localStorage.getItem("dataSearch") || "");

  React.useEffect(() => {
     location.pathname === '/saved-movies' ? setSearch('') : setSearch(localStorage.getItem("dataSearch")) || setSearch('');
     location.pathname === '/saved-movies' ? setIsShort(false) : setIsShort(localStorage.getItem("isShort")) || setIsShort(false);
  }, [location.pathname])

  function handleSubmit(evt) {
    evt.preventDefault();
    const {movie} = values;
    onSubmit(movie);

  }

  function handleSavedSubmit(evt) {
    evt.preventDefault();

    onSubmitSavedSearch(values);

  }

  // function handleChange(evt) {
  //   setSearch(evt.target.value);
  // }

  // React.useEffect(() => {
  //   setValues((values) => ({
  //     ...values,
  //     search: currentUser.name,
  //     email: currentUser.email,
  //   }));
  // }, []);

  const [errMessage, setErrMessage] = React.useState('');

  function invalidHandler (evt) {
    evt.preventDefault();
    const validationMessage = evt.target.validationMessage;
    setErrMessage('Нужно ввести ключевое слово')
  }


console.log(isValid)

  return (
    <section className="search">
      <form
        className="search-form"
        onSubmit={
          location.pathname === "/movies" ? handleSubmit : handleSavedSubmit
        }

      >
        <div className="search-form__field">
          <input
            className="search-form__input"
            type="text"
            name="movie"
            id="movie"
            placeholder="Фильм"
            required
            ref={ref}
            value={values.movie ?? ''}
            onChange={handleChange}
            minLength={1}
            onInvalid={invalidHandler}
          />
          <button className={!isValid ? "search-form__submit search-form__submit_disabled" : "search-form__submit"} type="submit" disabled={!isValid}></button>
        </div>
        <FilterCheckbox isShort={isShort} onCheck={onCheck}/>
      </form>
          <span className="error error-search">{errMessage}</span>
    </section>
  );
}

export default SearchForm;
