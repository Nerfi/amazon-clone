import React, {useState} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider/StateProvider';
import {getBasketTotal} from '../../src/StateProvider/Reducer';
import {useHistory} from 'react-router-dom';
import {db} from '../../src/Components/firebase';


export const CheckoutForm = () => {

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [{basket, user}, dispatch] = useStateValue();

  //payment state
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  //stripe hooks
  const stripe = useStripe();
  const elements = useElements();

  const history =  useHistory();

  const handleChange = e => {

    setDisable(e.empty);
    setError(e.error ? e.error.message :  '');

  };

  //new Function

  const handleSubmit2 = async (e) => {

    e.preventDefault();
    setProcessing(true);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if(!error) {

      try {
        const {id} = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: getBasketTotal(basket) * 100,
            id: id,
          }
        ).then(response => {

          db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(id)
            .set({
              basket: basket,
              amount:  getBasketTotal(basket) * 100
            })



          setSucceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({
            type: 'EMPTY_BASKET'
          })

          history.replace("/orders")
        })
      } catch (error) {
        setError(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit2} style={{ width: 400 }}>
      <h3 style={{color: 'red'}}>{error && error}</h3>
      <CardElement onChange={handleChange}/>
      <div className="price__container">
  <CurrencyFormat
    renderText={(value) => (
      <div>
        <h3>
          Order total: {value}
        </h3>

      </div>
    )}

    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"€"}

  />
      </div>
      <button disabled={processing || disable || succeeded}>
       <span>{processing ? "Processing..." : "Buy now "}</span>
      </button>

    </form>
  );
};
export default CheckoutForm;
