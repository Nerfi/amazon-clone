import React from 'react';
import './Product.css';
import  {useStateValue} from '../StateProvider/StateProvider';

const Product = ({id, title, image, price, rating}) => {

  const [{basket}, dispatch] = useStateValue();


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
            <p>Here goes an start icon</p>
          ))
        }
      </div>

  </div>

    <img src={image} alt="img prop"/>
    <button onClick={addToBasket}>add to basket</button>
  </div>
};

export default Product;
