import React from 'react';
import './Product.css';

const Product = ({id, title, image, price, rating}) => {

  return <div className="product">
  <div className="product__info">
      <p>title</p>

      <p className="product__price">
        <small>$</small>
       <strong>price $$</strong>
      </p>

      <div className="product__rating">
        {
          Array(rating)
          .fill()
          .map((_) => (
            <p>Here goes an start icon</p>
          ))
        }
      </div>

  </div>

    <img src="https://images.unsplash.com/photo-1600009274776-5422e05f1c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="img prop"/>
    <button>add to basket</button>
  </div>
};

export default Product;
