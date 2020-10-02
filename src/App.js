import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../src/UI/Navbar';
import Home from '../src/Components/Home';


function App() {
  return (
   <Router>

      <div className="App">

      <Switch>

        <Route path="/checkout">
        <Navbar/>

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
