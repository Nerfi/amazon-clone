import React from 'react';
import './Product.css';
import  {useStateValue} from '../StateProvider/StateProvider';
import {BsStar} from 'react-icons/bs';

const Product = ({id, title, image, price, rating}) => {

  const [{basket, user}, dispatch] = useStateValue();


  const addToBasket = () => {
      //add item to basket
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id,
          title,
          image,
          price,
          rating
        }
      })
  };

  return <div className="product">
  <div className="product__info">
      <p>{title}</p>

      <p className="product__price">
        <small>{price}$</small>
       <strong> $$</strong>
      </p>

      <div className="product__rating">
        {
          Array(rating)
          .fill()
          .map((_) => (
           <BsStar/>
          ))
        }
      </div>

  </div>

    <img src={image} alt="img prop"/>
    {
      user ? <button onClick={addToBasket}>add to basket</button> : null
    }

  </div>
};

export default Product;
