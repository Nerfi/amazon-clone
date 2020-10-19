import React from 'react';
import './Product.css';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import{useStateValue} from '../StateProvider/StateProvider';
import ShoppingCard from '../UI/ShoppingCard';


const Product = ({id, title, image, price, rating}) => {

  const [{basket, user}, dispatch] = useStateValue();

  const addToBasket = () => {
      //add item to basket, this function is not implemented yey ad onClick prop
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



  return <div className="product__container">
   <ShoppingCard image={image} id={id} title={title} rating={rating}/>

  </div>

};

export default Product;










