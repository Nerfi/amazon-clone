import React,{useState,useEffect} from 'react';
import './Home.css';
import Product from './Product';
import {db} from  './firebase';
import Spinner from '../../src/UI/Spinner';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //example
    useEffect(() => {

    const fetchProducts = async () => {

      setLoading(prev => !prev);

       await db.collection("products")
        .get()
        .then((snapShot) => {

          const newArray = [];

          snapShot.forEach((doc) => {
            newArray.push({ id: doc.id, ...doc.data() })
          })
          setLoading(prev => !prev);
          setProducts(newArray);
        })
        .catch(error => setError(error.message))
    };

    //calling the function, always call it !

    fetchProducts();

  },[]);

    if(loading) return <Spinner/>

  return <div className="home">

      {error && error}
    <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg" alt="background"/>

    <div className="home__row">
    {
      products.map(product => (
        <Product
        key={product.id}
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
        rating={product.rating}
        />
      ))
    }

    </div>

  </div>
};

export default Home;


