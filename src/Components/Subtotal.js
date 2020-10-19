import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider/StateProvider';
import {getBasketTotal} from '../StateProvider/Reducer';
import {useHistory} from 'react-router-dom';

const Subtotal = () => {

  const [{basket}] = useStateValue();

  const history = useHistory();

  return <div className="subtotal">

  <CurrencyFormat
    renderText={(value) => (
      <>
        <h3>Order total : {value}</h3>
        <small className="subtotal__gift">
          <input type="checkbox"/> We have a gift for this buy
        </small>
      </>
    )}

    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"€"}

  />
    <button onClick={e => history.push('/payment')}>Procees checkout</button>
  </div>
};

export default Subtotal;
