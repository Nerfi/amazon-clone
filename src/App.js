import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../src/UI/Navbar';
function App() {
  return (
   <Router>

      <div className="App">

      <Switch>


        <Route path="/">

        </Route>

      </Switch>


      </div>
   </Router>
  );
}

export default App;
