import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../src/UI/Navbar';
import Home from '../src/Components/Home';
import CheckOut from '../src/Components/CheckOut';
import Login from '../src/Components/Login';
import {useStateValue} from './StateProvider/StateProvider';
import auth from '../src/Components/firebase';

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

        <Route path="/login">
        <Login/>

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
