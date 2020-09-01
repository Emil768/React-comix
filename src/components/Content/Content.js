import React, { useCallback, useEffect } from "react";

import "../Content/Content.scss";
import Categories from "../Categories/Categories";
import SortPopup from "../SortPopup/SortPopup";
import ComixBlock from "../ComixBlock/ComixBlock";
import LoadingBlock from "../ComixBlock/LoadingBlock";

import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../../redux/actions/filters";
import { fetchComix } from "../../redux/actions/comix";
import { addComixCart } from "../../redux/actions/cart";

let categoryNames = ["Марвел", "DC", "Манга", "Фантастика/Фэнтези"];
let sortNames = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];
function Content() {
  let dispatch = useDispatch();

  //Вытаскиваем и state содержимое
  let items = useSelector(({ comix }) => comix.items);
  let isLoading = useSelector(({ comix }) => comix.isLoaded);
  let { category, sortBy } = useSelector(({ filters }) => filters);
  let cartItems = useSelector(({ cart }) => cart.items);

  //Получаем комиксы
  useEffect(() => {
    dispatch(fetchComix(category, sortBy, sortBy.order));
  }, [category, sortBy]);

  //Получам индекс сортировки в диспатч
  let onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  let onClickSortType = (type) => {
    dispatch(setSortBy(type));
  };

  let onClickAddComix = (obj) => {
    dispatch(addComixCart(obj));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup
            activeSortType={sortBy.type}
            items={sortNames}
            onClickSortType={onClickSortType}
          />
        </div>
        <h2 className="content__title">Все комиксы</h2>
        <div className={items.length <= 3 ? "flex-start" : "content__items"}>
          {isLoading
            ? items.map((obj, index) => {
                return (
                  <ComixBlock
                    key={index}
                    {...obj}
                    onClickSortType={onClickSortType}
                    onClickAddComix={onClickAddComix}
                    addedCount={
                      cartItems[obj.id] && cartItems[obj.id].items.length
                    }
                  />
                );
              })
            : Array(items.length)
                .fill(0)
                .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Content;
