import React, {useState, useEffect} from 'react';
import {db} from './firebase';
import Product from './Product';
import { useRouteMatch } from "react-router-dom";
import  './SingleProduct.css';
import {BsStar} from 'react-icons/bs';

const SingleProduct = (props) => {

  const [singleProduct, setProduct ] = useState({});
  const [error, setError] = useState(null);
  const {params} = useRouteMatch();


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

  return <div className="singleProduct">

      {error && error}

     <div className="product__info">

       <h2>{singleProduct.title}</h2>

    </div>
       <img src={singleProduct.image} alt=""/>


        <div className="product__rating">
          {
            Array(singleProduct.rating)
            .fill()
            .map((_,id) => (
             <BsStar key={id}/>
            ))
          }
        </div>
        <p className="product__price">
          <small>{singleProduct.price}$</small>
         <strong> $$</strong>
        </p>
       <p className="singleProduct__description">{singleProduct.description}</p>

  </div>
};

export default SingleProduct;
