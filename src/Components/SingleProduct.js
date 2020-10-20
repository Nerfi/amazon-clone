import React, {useState, useEffect} from 'react';
import {db} from './firebase';
import Product from './Product';
import { useRouteMatch } from "react-router-dom";
import  './SingleProduct.css';
import {BsStar} from 'react-icons/bs';
import {useStateValue} from '../StateProvider/StateProvider';
import Spinner from '../../src/UI/Spinner';


const SingleProduct = (props) => {

  const [singleProduct, setProduct ] = useState({});
  const [error, setError] = useState(null);
  const {params} = useRouteMatch();
  const [{ basket, user,wishes}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);


  const {title, image, rating, price, description, id} = singleProduct;


  useEffect(() => {

    const fetchSingleProduct = async () => {

      setLoading(true);

      await db.collection("products")
        .doc(params.id)
        .get()
        .then(doc => {
          if(doc.exists) setProduct({id: doc.id, ...doc.data()});
          setLoading(false)
        })
        .catch(e => setError(e.message))
    };

    fetchSingleProduct();
    //setLoading(!loading)

  },[]);


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

  if(loading) return <Spinner/>;


  const addToWishes = () => {

    dispatch({
      type: 'ADD_TO_WISHES',
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

       <div className="auth__rendering">

         {
          user ? <button onClick={addToBasket}>add to basket</button> : null
         }

           <i className="fa fa-heart" onClick={addToWishes}/>
       </div>


  </div>
};

export default SingleProduct;
