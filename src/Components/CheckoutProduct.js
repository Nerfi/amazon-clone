import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from '../StateProvider/StateProvider';
import {BsStar} from 'react-icons/bs';


const CheckoutProduct = ({id, title, price, rating, image, action}) => {

   const [{basket}, dispatch] = useStateValue();


  const removeItem = () => {
    //remove item from basket state
    dispatch({

      type: 'REMOVE_FROM_BASKET',
      id: id,
    })

  };


  const removeWish = () => {

    dispatch({
      type: 'REMOVE_FROM_WISHLIST',
      id: id,
    });

  };


  return(
    <div className="checkoutProduct">

      <img className="checkoutProduct__image" src={image} alt="checkout__img"/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
        {
          Array(rating)
          .fill()
          .map((_) => (
           <BsStar key={id}/>
          ))
        }
      </div>

      {
        action === 'checkOut' || 'payment' ? <button onClick={removeItem}>Remove from basket </button> : <button onClick={removeWish}>remove from wish list</button>
      }



      </div>
    </div>
  );
}
export default CheckoutProduct;
