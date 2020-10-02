import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {

  return <nav className="header">

  <Link to="/">
     <img
     className= "header__logo"
     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpmcvariety.files.wordpress.com%2F2018%2F01%2Famazon-logo.jpg%3Fw%3D1000%26h%3D562%26crop%3D1&f=1&nofb=1"
     alt="amazon-logo"
     />

  </Link>

 <input type="text" className="header__searchInput" />

  </nav>

};

export default Navbar;
