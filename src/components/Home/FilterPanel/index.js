import React from "react";
import "./style.css";

const FilterPanel = () => {
  return (
    <div>
      <h4>Color</h4>
      <label class="container">
        Red
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Blue
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Green
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <h4>Gender</h4>
      <label class="container">
        Men
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Women
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <h4>Price</h4>
      <label class="container">
        0-250
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        250-450
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        450 above
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <h4>Type</h4>
      <label class="container">
        Polo
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Hoodie
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Basic
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

export default FilterPanel;
