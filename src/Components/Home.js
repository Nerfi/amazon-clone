import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return <div className="home">
    <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg" alt="background"/>

    <div className="home__row">
      <Product
      id="46546sd4a654"
      title="the lean startup"
      image="https://images.unsplash.com/photo-1600009274776-5422e05f1c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      price="39"
      rating="5"
      />

      <Product
      id="fsdf4544sdfgdfg"
      title="Iphone XII"
      image="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      rating="5"
      price="15204"
      />
    </div>

  </div>
};

export default Home;


