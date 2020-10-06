import React from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import auth from  './firebase';


console.log(auth, 'auth')

const Login = () => {
  //functions for login and register goes over here and need to be done
  const login = () => {

  };

  const register = () => {

  };

  return <div className="login">
    <Link to="/">
      <img
      className="login__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      alt="login"
      />
    </Link>

    <div className="login__container">
      <h1>Sign in</h1>

      <form>
        <h5>Email</h5>
        <input type="email"/>
        <h5>Password</h5>
        <input type="password"/>
        <button onClick={login} type="submit" className="login__signInButton">Sign in </button>
      </form>

      <p>lorem inpu</p>
      <button onClick={register} className="login__registerButton">create your amazon account </button>
    </div>
  </div>
};

export default Login;
