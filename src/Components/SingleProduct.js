import React, {useState, useEffect} from 'react';
import {db} from './firebase';
import Product from './Product';
import { useRouteMatch } from "react-router-dom";
import  './SingleProduct.css';
import {BsStar} from 'react-icons/bs';
import {useStateValue} from '../StateProvider/StateProvider';

const SingleProduct = (props) => {

  const [singleProduct, setProduct ] = useState({});
  const [error, setError] = useState(null);
  const {params} = useRouteMatch();

   const [{basket, user}, dispatch] = useStateValue();

  console.log(dispatch, 'dispatch')

  useEffect(() => {

    const fetchSingleProduct = async () => {

      await db.collection("products")
        .doc(params.id)
        .get()
        .then(doc => {
          if(doc.exists) setProduct(doc.data());
        })
        .catch(e => setError(e.message))
    };

    //calling the function

    fetchSingleProduct();

  },[]);

  const {title, image, rating, price, description, id} = singleProduct;

  const addToBasket = () => {

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

  return <div className="singleProduct">

      {error && error}

     <div className="product__info">

       <h2>{title}</h2>

    </div>
       <img src={image} alt=""/>


        <div className="product__rating">
          {
            Array(rating)
            .fill()
            .map((_,id) => (
             <BsStar key={id}/>
            ))
          }
        </div>
        <p className="product__price">
          <small>{price}$</small>
         <strong> $$</strong>
        </p>
       <p className="singleProduct__description">{description}</p>
        <button onClick={addToBasket}>add to basket</button>

  </div>
};

export default SingleProduct;
