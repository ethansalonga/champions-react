import React from 'react'

const Price = ({ salePrice, originalPrice}) => {
  return (
    <div className="champ__price">
    {salePrice ? (
      <>
        <span className="champ__price--normal">{originalPrice}g</span>
        {salePrice}g
      </>
    ) : (
      <>{originalPrice}g</>
    )}
  </div>
  )
}

export default Price
