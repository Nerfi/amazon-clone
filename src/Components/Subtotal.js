import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider/StateProvider';
import {getBasketTotal} from '../StateProvider/Reducer';

const Subtotal = () => {

  const [{basket}, dispatch] = useStateValue();

  return <div className="subtotal">

  <CurrencyFormat
    renderText={(value) => (
      <>
        <p>
          Subtotal({basket.length} items): <strong>{`${value}`}</strong>
        </p>
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
    <button>Procees checkout</button>
  </div>
};

export default Subtotal;
