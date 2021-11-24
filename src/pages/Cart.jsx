import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.png";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  };
  return (
    <div id="champs__body">
      <main id="champs__main">
        <div className="champs__container">
          <div className="row">
            <div className="champ__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__champ">Champ</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((champ) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__champ">
                        <img
                          src={champ.url}
                          alt=""
                          className="cart__champ--img"
                        />
                        <div className="cart__champ--info">
                          <span className="cart__champ--title">
                            {champ.title}
                          </span>
                          <span className="cart__champ--price">
                            {champ.salePrice || champ.originalPrice}g
                          </span>
                          <button
                            className="cart__champ--remove"
                            onClick={() => removeItem(champ)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="text"
                          pattern="[0-9]*"
                          min={1}
                          max={99}
                          className="cart__input"
                          value={champ.quantity}
                          onChange={(event) =>
                            changeQuantity(champ, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        {(champ.salePrice || champ.originalPrice) *
                          champ.quantity}
                        g
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You haven't recruited any champs!</h2>
                  <Link to="/champs">
                    <button className="btn">Browse champs</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>{total() * 0.9}g</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>{total() * 0.1}g</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>{total()}g</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert(`Haven't got around to doing this yet!`)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
