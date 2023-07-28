import React from "react";

import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filter-checkbox">
      <form>
        <input
          className="filter-checkbox-checkbox"
          type="checkbox"
          name="checkbox"
          id="checkbox"

        />
        <button className="search-form__submit" type="submit"></button>
      </form>
    </section>
  );
}

export default FilterCheckbox;