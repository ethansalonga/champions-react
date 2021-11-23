import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="blue">Champs</span>
          </h2>
          <Link to="/champs">
            <button className="btn">Browse more champs</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Explore
