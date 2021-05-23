import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
  const products = useSelector(state => state.allProducts.products)
  const renderProduct = products.map((product) => {
      const { title , price , id, category, image } = product;
      return (
        <Link to={`product/${id}`}>
          <div className="ui link cards" key={id}>
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
     )
  });
  return (
    <>
      <div className="ui four column grid wide">
      { renderProduct }
      </div>
      
    </>
  )
}

export default Product
