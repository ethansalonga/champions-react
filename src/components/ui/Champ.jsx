import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Champ = ({ champ }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = champ.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      // When the component unmounts
      mountedRef.current = false;
    };
  });

  return (
    <div className="champ">
      {img ? (
        <>
          <Link to={`/champs/${champ.id}`}>
            <figure className="champ__img--wrapper">
              <img src={img.src} alt="" className="champ__img" />
            </figure>
          </Link>
          <div className="champ__title">
            <Link to={`/champs/${champ.id}`} className="champ__title--link">
              {champ.title}
            </Link>
          </div>
          <Rating rating={champ.rating} />
          <Price
            salePrice={champ.salePrice}
            originalPrice={champ.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="champ__img--skeleton"></div>
          <div className="skeleton champ__title--skeleton"></div>
          <div className="skeleton champ__rating--skeleton"></div>
          <div className="skeleton champ__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Champ;
