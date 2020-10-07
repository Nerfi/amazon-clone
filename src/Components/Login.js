import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import auth from  './firebase';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();


  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(e => setError(e.message))
  };

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => setError(error.message))
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
      {error && error}
      <h1>Sign in</h1>

      <form>
        <h5>Email</h5>
        <input value={email} type="email" onChange={e => setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
        <button onClick={login} type="submit" className="login__signInButton">Sign in </button>
      </form>

      <p>lorem inpu</p>
      <button onClick={register} className="login__registerButton">create your amazon account </button>
    </div>
  </div>
};

export default Login;
