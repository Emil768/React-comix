import React from "react";
import "./CartItem.scss";
function CartItem({
  id,
  name,
  img,
  totalPrice,
  itemCount,
  removeItem,
  plusComix,
  minusComix,
}) {
  let handleRemoveClick = () => {
    removeItem(id);
  };

  let handlePlusComix = () => {
    plusComix(id);
  };

  let handleMinuxComix = () => {
    minusComix(id);
  };
  return (
    <div className="cart__item">
      <div className="cart__item-info">
        <div className="cart__item-img">
          <img src={img} alt="cart-img" />
        </div>
        <h3>{name}</h3>
      </div>
      <div className="cart__item-counter">
        <div className="cart__item-count">
          <div onClick={handleMinuxComix} className="btn btn-count">
            <svg
              width="10"
              height="2"
              viewBox="0 0 10 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z"
                fill="#D64A4A"
              />
            </svg>
          </div>
          <b>{itemCount}</b>
          <div onClick={handlePlusComix} className="btn btn-count">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84019 4.04001H5.96019V1.16001C5.96019 0.629852 5.53035 0.200012 5.00019 0.200012C4.47003 0.200012 4.04019 0.629852 4.04019 1.16001V4.04001H1.1602C0.630035 4.04001 0.200195 4.46985 0.200195 5.00001C0.200195 5.53017 0.630035 5.96001 1.1602 5.96001H4.04019V8.84001C4.04019 9.37017 4.47003 9.80001 5.00019 9.80001C5.53035 9.80001 5.96019 9.37017 5.96019 8.84001V5.96001H8.84019C9.37035 5.96001 9.80019 5.53017 9.80019 5.00001C9.80019 4.46985 9.37035 4.04001 8.84019 4.04001Z"
                fill="#D64A4A"
              />
            </svg>
          </div>
        </div>
        <div className="cart__item-price">
          <b>
            <span>{totalPrice}</span> ₽
          </b>
        </div>
        <div onClick={handleRemoveClick} className="cart__item-close">
          <div className="btn btn-close">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7479 9.95572L9.49931 7.70712L11.7479 5.45852C12.1618 5.04459 12.1618 4.37339 11.7479 3.95946C11.334 3.54553 10.6628 3.54553 10.2488 3.95946L8.00024 6.20806L5.75164 3.95946C5.33771 3.54553 4.66651 3.54553 4.25258 3.95946C3.83865 4.37339 3.83865 5.04459 4.25258 5.45852L6.50118 7.70712L4.25258 9.95572C3.83865 10.3697 3.83865 11.0409 4.25258 11.4548C4.66651 11.8687 5.33772 11.8687 5.75164 11.4548L8.00024 9.20619L10.2488 11.4548C10.6628 11.8687 11.334 11.8687 11.7479 11.4548C12.1618 11.0409 12.1618 10.3697 11.7479 9.95572Z"
                fill="#D0D0D0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
