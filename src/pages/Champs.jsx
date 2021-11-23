import React, { useState } from "react";
import Champ from "../components/ui/Champ";

const Champs = ({ champs: initialChamps }) => {
  const [champs, setChamps] = useState(initialChamps);

  function filterChamps(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      setChamps(
        champs
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setChamps(
        champs
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setChamps(champs.slice().sort((a, b) => b.rating - a.rating))
    }
  }
  return (
    <div id="champs__body">
      <main id="champs__main">
        <section>
          <div className="champs__container">
            <div className="row">
              <div className="champs__header">
                <h2 className="section__title champs__header--title">
                  All Champs
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterChamps(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="champs">
                {champs.map((champ) => (
                  <Champ champ={champ} key={champ.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Champs;
