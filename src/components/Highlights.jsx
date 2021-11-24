import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="scetion__title">
            Why choose <span className="blue">Champions</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the champ you recruited instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="users" />}
              title="Diverse Selection"
              para="Champions has characters with all different kinds of strengths
              and abilities."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Recruit popular champs for as little as 450 gold."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
