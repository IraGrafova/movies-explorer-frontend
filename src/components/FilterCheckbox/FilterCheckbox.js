import React from "react";

import "./FilterCheckbox.css";

function FilterCheckbox({ isShort, onCheck }) {
  
  function handleCheked(evt) {
    onCheck(evt.target.checked);
  }

  const short = JSON.parse(isShort)

  return (
    <div className="filter">
      <label className="filter-checkbox">
        <input
          className="filter-checkbox__checkbox"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleCheked}
          checked={short ?? false}
        />
        <span
          className={`filter-checkbox__toggle ${
            !short && "filter-checkbox__toggle-shutdown"
          }`}
        >
          <span
            className={`filter-checkbox__toggle-button ${
              !short && "filter-checkbox__toggle-button-shutdown"
            }`}
          ></span>
        </span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
