import React from "react";
import { champs } from "../data";
import Champ from "./ui/Champ";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="blue">Champs</span>
          </h2>
          <div className="champs">
            {champs
              .filter(champ => champ.salePrice > 0)
              .slice(0, 8)
              .map((champ) => (
              <Champ champ={champ} key={champ.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
