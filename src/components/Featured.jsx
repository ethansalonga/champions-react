import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Champ from "./ui/Champ";
import { champs } from "../data";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="blue">Champs</span>
          </h2>
          <div className="champs">
            {champs
              .filter((champ) => champ.rating === 5)
              .slice(0, 4)
              .map((champ) => (
                <Champ champ={champ} key={champ.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
