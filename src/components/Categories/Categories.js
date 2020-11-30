import React, { memo } from "react";

import "../Categories/categories.scss";

let Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <div className="mobile-oveflow">
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
    </div>
  );
});

export default Categories;
