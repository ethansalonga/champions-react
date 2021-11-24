import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Champ from "../components/ui/Champ";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const ChampInfo = ({ champs, addToCart, cart }) => {
  const { id } = useParams();
  const champ = champs.find((champ) => +champ.id === +id);

  function addChampToCart(champ) {
    addToCart(champ);
  }

  function champExistsOnCart() {
    return cart.find((champ) => champ.id === +id);
  }

  return (
    <div id="champs__body">
      <main id="champs__main">
        <div className="champs__container">
          <div className="row">
            <div className="champ__selected--top">
              <Link to="/champs" className="champ__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/champs" className="champ__link">
                <h2 className="champ__selected--title--top">Champs</h2>
              </Link>
            </div>
            <div className="champ__selected">
              <figure className="champ__selected--figure">
                <img src={champ.url} alt="" className="champ__selected--img" />
              </figure>
              <div className="champ__selected--description">
                <h2 className="champ__selected--title">{champ.title}</h2>
                <Rating rating={champ.rating} />
                <div className="champ__selected--price">
                  <Price
                    originalPrice={champ.originalPrice}
                    salePrice={champ.salePrice}
                  />
                </div>
                <div className="champ__summary">
                  <h3 className="champ__summary--title">Summary</h3>
                  <p className="champ__summary--para">{champ.summary}</p>
                </div>
                {champExistsOnCart() ? (
                  <Link to={`/cart`} className="champ__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addChampToCart(champ)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="champs__container">
          <div className="row">
            <div className="champ__selected--top">
              <h2 className="champ__selected--title--top">
                Recommended Champs
              </h2>
            </div>
            <div className="champs">
              {champs
                .filter((champ) => champ.rating === 5 && +champ.id !== +id)
                .slice(0, 4)
                .map((champ) => (
                  <Champ champ={champ} key={champ.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChampInfo;
