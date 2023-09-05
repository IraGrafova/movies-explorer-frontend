import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { useFormWithValidation } from "../Hooks/useValidate";
import "../Hooks/useValidate.css";

function SearchForm({
  onSubmit,
  isShort,
  setIsShort,
  onCheck,
  onSubmitSavedSearch,
  onCheckShortSaved,
}) {
  const { values, setValues, handleChange, isValid } = useFormWithValidation();

  let location = useLocation();
  const ref = useRef();

  const [errMessage, setErrMessage] = React.useState("");

  React.useEffect(() => {
    location.pathname === "/saved-movies"
      ? setValues((values) => ({
          ...values,
          movie: "",
        }))
      : setValues((values) => ({
          ...values,
          movie: localStorage.getItem("dataSearch"),
        }));
    location.pathname === "/saved-movies"
      ? setIsShort(false)
      : setIsShort(localStorage.getItem("isShort") || false);
  }, [location.pathname, setIsShort, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const { movie } = values;
    onSubmit(movie);
  }

  function handleSavedSubmit(evt) {
    evt.preventDefault();
    const { movie } = values;
    evt.preventDefault();
    onSubmitSavedSearch(movie);
  }

  React.useEffect(() => {
    values.movie?.length === 0
      ? setErrMessage("Нужно ввести ключевое слово")
      : setErrMessage("");
  }, [isValid]);

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
            value={values.movie ?? ""}
            onChange={handleChange}
            minLength={1}
          />
          <button
            className={
              !isValid
                ? "search-form__submit search-form__submit_disabled"
                : "search-form__submit"
            }
            type="submit"
            disabled={!isValid}
          ></button>
        </div>
        <FilterCheckbox
          isShort={isShort}
          onCheck={onCheck}
          onCheckShortSaved={onCheckShortSaved}
        />
      </form>
      <span className="error error-search">{errMessage}</span>
    </section>
  );
}

export default SearchForm;
