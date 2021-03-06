import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../src/UI/Navbar';
import Home from '../src/Components/Home';
import CheckOut from '../src/Components/CheckOut';
import Login from '../src/Components/Login';
import {useStateValue} from './StateProvider/StateProvider';
import {auth} from '../src/Components/firebase';
import SingleProduct from '../src/Components/SingleProduct';
import WishesComponent from '../src/Components/Wishes';
import Payment from '../src/Components/Payment';
import Orders from '../src/Components/Orders';


function App() {
  //getting the data layer
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    //creating a listener in order to know when the user sign in or sign out
   const unsuscribe =  auth.onAuthStateChanged((authUser) => {

      if(authUser) {
        //the user is log in
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

   //clean up
   return () => {
    unsuscribe();
   }

  },[]);

  return (
   <Router>

      <div className="App">

      <Switch>

        <Route path="/checkout">
          <Navbar/>
          <CheckOut/>

        </Route>


        <Route path="/orders">
          <Navbar/>
          <Orders/>

        </Route>

        <Route path="/login">
        <Login/>

        </Route>

        <Route path="/payment">

          <Navbar/>
          <Payment/>

        </Route>


        <Route path="/product/:id" >
        <Navbar/>
        <SingleProduct />

        </Route>

         <Route path="/wishes" >
          <Navbar/>
          <WishesComponent />

        </Route>

        <Route path="/">
          <Navbar/>
          <Home/>

        </Route>

      </Switch>


      </div>
   </Router>
  );
}

export default App;
