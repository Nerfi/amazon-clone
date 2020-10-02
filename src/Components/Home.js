import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return <div className="home">
    <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg" alt="background"/>

    <div className="home__row">
      <Product/>
      <Product/>
    </div>

  </div>
};

export default Home;


