import React from "react";
import { useLocation } from "react-router-dom";

import "./FilterCheckbox.css";

function FilterCheckbox({ isShort, onCheck, onCheckShortSaved }) {

  let location = useLocation();

  function handleCheked(evt) {
    // location.pathname === "/movies" ? JSON.stringify(localStorage.setItem("isShort", evt.target.checked)) :
    onCheck(evt.target.checked);
    console.log('FilterCheckbox  '+evt.target.checked)
    // JSON.stringify(localStorage.setItem("isShort", value));
  }

  function handleChekedSaved(evt) {
    onCheckShortSaved(evt.target.checked)

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
          // onChange={location.pathname === "/movies" ? handleCheked : handleChekedSaved}
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
