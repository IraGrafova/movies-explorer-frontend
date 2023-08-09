import React from "react";

import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filter">
      <label className="filter-checkbox">
        <input
          className="filter-checkbox__checkbox"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          // checked
        />
        <span className='filter-checkbox__toggle filter-checkbox__toggle-shutdown '>
          <span className='filter-checkbox__toggle-button filter-checkbox__toggle-button-shutdown '></span>
          </span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </section>
  );
}

export default FilterCheckbox;
