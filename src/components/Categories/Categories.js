import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import "../Categories/categories.scss";

let Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickCategory(null)}
          className={activeCategory == null ? "active" : null}
        >
          Все
        </li>
        {items.map((item, index) => {
          return (
            <li
              onClick={() => onClickCategory(index)}
              className={activeCategory === index ? "active" : null}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
