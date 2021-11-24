import React from 'react';
import Jinx from '../assets/Jinx.png';

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Runeterra's most awarded recruiting platform</h1>
            <h2>Find your dream champ with <span className="blue">Champions</span></h2>
            <a href="#highlights">
              <button className="btn">Browse champs</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={Jinx} alt="" className="header__img" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing
