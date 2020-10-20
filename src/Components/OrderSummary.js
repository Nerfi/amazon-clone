import React from 'react';
import {BsStar} from 'react-icons/bs';

const OrderSummary = ({id, title, image, price, rating}) => {
  return  <div className="orderSummary">

      <img className="orderSummary__image" src={image} alt="checkout__img"/>

      <div className="orderSummary__info">
        <p className="orderSummary__title"> <strong>{title}</strong></p>
        <p className="orderSummary__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="orderSummary__rating">
        {
          Array(rating)
          .fill()
          .map((_) => (
           <BsStar key={id}/>
          ))
        }
      </div>

      </div>
    </div>
};

export default OrderSummary;
