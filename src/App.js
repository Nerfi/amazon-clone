import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../src/UI/Navbar';
import Home from '../src/Components/Home';
import CheckOut from '../src/Components/CheckOut';


function App() {
  return (
   <Router>

      <div className="App">

      <Switch>

        <Route path="/checkout">
        <Navbar/>
        <CheckOut/>

        </Route>

        <Route path="/login">
        <h1>Login page</h1>

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
