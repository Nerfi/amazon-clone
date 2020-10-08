import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import{useStateValue} from '../StateProvider/StateProvider';
import {auth} from '../Components/firebase';

const Navbar = () => {
  //destructiring the object state, since it's an object I can destructured it and pull what I need, in this case basket
  const [{basket, user}] = useStateValue();

  const login = () => {
    if(user) {
      auth.signOut();
    }
  }

  return <nav className="header">

  <Link to="/">
     <img
     className= "header__logo"
     src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.gonzaga.edu%2Fcareercenter%2Ffiles%2F2014%2F04%2Famazon-logo.png&f=1&nofb=1"
     alt="amazon-logo"
     />

  </Link>

  <div className="header__search">
    <input type="text" className="header__searchInput" />
    <SearchIcon className="header__searchIcon" />
  </div>

  <div className="header__nav">

    <Link to={!user && "/login"} className="header__link">

       <div onClick={login} className="header__option">
         <span className="header__optionLineOne" > Hello { user &&user.email}</span>
        <span className="header__optionLineTwo"> {user ?  'Sign out' : 'Sign In'}</span>
      </div>

    </Link>

    <Link to="/" className="header__link">

      <div className="header__option">
        <span className="header__optionLineOne">returns</span>
         <span className="header__optionLineTwo">& orders</span>
      </div>


    </Link>

    <Link to="/" className="header__link">

    <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

    </Link>

    <Link to="/checkout"  className="header__link">

      <div className="header__optionBasket">

      <ShoppingBasketIcon/>
        <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>

      </div>

    </Link>

  </div>

</nav>

};

export default Navbar;
