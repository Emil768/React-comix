import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Cart/Cart.scss";
import CartItem from "../CartItem/CartItem";

import { Link } from "react-router-dom";

import cartEmptyImg from "../../img/cart-empty-img.png";

import {
  clearComixCart,
  removeComixCart,
  plusComixCart,
  minusComixCart,
} from "../../redux/actions/cart";
function Cart() {
  let dispatch = useDispatch();
  let { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

  let cartComix = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  let clearCart = () => {
    dispatch(clearComixCart());
  };
  let removeComix = (id) => {
    dispatch(removeComixCart(id));
  };

  let plusComix = (id) => {
    dispatch(plusComixCart(id));
  };

  let minusComix = (id) => {
    dispatch(minusComixCart(id));
  };

  return (
    <div className="container--cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="cart__title">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.85117 8.25001H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.444 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31084C7.24334 3.72992 6.95872 3.19645 6.51862 2.80969C6.07852 2.42293 5.5129 2.20923 4.927 2.20834H2.20825"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Корзина
            </h2>
            <div className="cart__clear">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 4.99999V3.33332C6.66663 2.8913 6.84222 2.46737 7.15478 2.15481C7.46734 1.84225 7.89127 1.66666 8.33329 1.66666H11.6666C12.1087 1.66666 12.5326 1.84225 12.8451 2.15481C13.1577 2.46737 13.3333 2.8913 13.3333 3.33332V4.99999M15.8333 4.99999V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V4.99999H15.8333Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 9.16666V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6666 9.16666V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span onClick={clearCart}>Очистить корзину</span>
            </div>
          </div>
          <div className="cart__items">
            {cartComix.map((item, index) => {
              return (
                <CartItem
                  id={item.id}
                  key={index}
                  name={item.name}
                  img={item.imageUrl}
                  totalPrice={items[item.id].totalPrice}
                  itemCount={items[item.id].items.length}
                  removeItem={removeComix}
                  plusComix={plusComix}
                  minusComix={minusComix}
                />
              );
            })}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего комиксов: <b>{totalCount}</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link className="btn-back" to="/">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>Вернуться назад</span>
              </Link>
              <a className="btn-pay" href="/#">
                <span>Оплатить сейчас</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <h1>Корзина пустая </h1>
          <p>
            Вероятней всего, вы не купили комиксы. Для того чтобы купить комикс
            перейдите на главную страницу
          </p>
          <img src={cartEmptyImg} alt="empty epmty-img" />
          <Link className="btn-back btn-empty" to="/">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
