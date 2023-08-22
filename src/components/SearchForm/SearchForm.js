import React from "react";
import { useRef } from "react";

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({dataSearch, onSubmit, isShort, onCheck}) {
  const ref = useRef();
  const [search, setSearch] = React.useState('')


  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(ref.current.value)
    // onSubmit(ref.current.value);
  }

  function handleChange(evt) {
    setSearch(evt.target.value)
  }

  return (
    <section className="search">
      {/* onSubmit={handleSubmit} */}
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__field">
        <input
          className="search-form__input"
          type="text"
          name="movie"
          id="movie"
          placeholder="Фильм"
          required
          ref={ref}
          value={search}
          onChange={handleChange}
        />
        <button className="search-form__submit" type="submit"></button>
        </div>
        <FilterCheckbox isShort={isShort} onCheck={onCheck}/>
      </form>
    </section>
  );
}

export default SearchForm;
