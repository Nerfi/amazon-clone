import React,{useState,useEffect} from 'react';
import './Home.css';
import Product from './Product';
import {db} from  './firebase';
import Spinner from '../../src/UI/Spinner';
import {useStateValue} from '../StateProvider/StateProvider';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //query from reducer function
  const [{query},] = useStateValue();
  //state in order to handle API response with searched items
  const [searchItems, setItems] = useState([]);


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



    //useEffect in order to handle query search
    useEffect(()=> {

      const fetchQuery = async () => {

        await db.collection("products")
          .where("title", "==", query)
          .get()
          .then(snapShot => {

            const searchedItems = [];

            snapShot.forEach(doc => {


              searchItems.push({id: doc.id, ...doc.data()})


            })
            setItems(searchedItems);

          })
          .catch(e => setError(e.message))
      };

      //calling the funciton
      fetchQuery();

    },[query]);


    if(loading) return <Spinner/>;

      let items = products.map(product => (
          <Product
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}

          />
        ));

         //somehow this logic is not working
      if(searchItems.length > 0) {

        items = searchItems.forEach(product => (
         <Product
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}

          />
        ));
      }

      console.log(searchItems,  'response from API')

  return <div className="home">

        {error && error}
      <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_es_US_1x._CB432534552_.jpg" alt="background"/>

      <div className="home__row">
        {items}

    </div>

  </div>
};

export default Home;


