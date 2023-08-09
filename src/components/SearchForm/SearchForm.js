import React from "react";

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search-form">
        <input
          className="search-form__input"
          type="text"
          name="movie"
          id="movie"
          placeholder="Фильм"
        />
        <button className="search-form__submit" type="submit"></button>
      </form>
      <FilterCheckbox/>
    </div>
  );
}

export default SearchForm;
