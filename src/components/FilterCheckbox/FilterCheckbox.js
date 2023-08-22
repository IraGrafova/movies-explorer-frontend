import React from "react";

import "./FilterCheckbox.css";

function FilterCheckbox({isShort, onCheck}) {

  const [check, setCheck] = React.useState(false)

  function handleCheked(evt) {
    onCheck(evt.target.checked)
  }

  return (
    <div className="filter">
      <label className="filter-checkbox">
        <input
          className="filter-checkbox__checkbox"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleCheked}
          value={isShort}
        />
        <span className={`filter-checkbox__toggle ${!isShort && 'filter-checkbox__toggle-shutdown'}`} >
          <span className={`filter-checkbox__toggle-button ${!isShort && 'filter-checkbox__toggle-button-shutdown'}`}></span>
          </span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
