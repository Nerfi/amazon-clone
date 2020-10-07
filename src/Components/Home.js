import React,{useState,useEffect} from 'react';
import './Home.css';
import Product from './Product';
import {db} from  './firebase';

const Home = () => {

  const [products, setProducts] = useState([]);


  //example
    useEffect(() => {

    const fetchProducts = async () => {

       await db.collection("products")
        .get()
        .then((snapShot) => {

          const newArray = [];

          snapShot.forEach((doc) => {
            newArray.push({ id: doc.id, ...doc.data() })
          })

          setProducts(newArray);
        })
    };

    //calling the function, always call it !
    fetchProducts();

  },[]);

  return <div className="home">
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


