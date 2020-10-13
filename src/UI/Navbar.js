import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import{useStateValue} from '../StateProvider/StateProvider';
import {auth} from '../Components/firebase';

const Navbar = () => {

  const [{basket, user, query}, dispatch] = useStateValue();
  const  [queryTerm, setTerm] = useState('');


  const login = () => {
    if(user) {
      auth.signOut();
    }
  }

const clicked = e => {
  e.preventDefault();

  return dispatch({
    type: 'SEARCH_QUERY',
    query: queryTerm
  })
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
    <form onSubmit={clicked}>
        <input
          type="text"
          className="header__searchInput"
         placeholder='search a product...'
         onChange={e =>  setTerm(e.target.value)}
         value={queryTerm}
         />
        <SearchIcon className="header__searchIcon"/>

    </form>
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

    <Link to="/wishes" className="header__link">

      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Wishes</span>
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
