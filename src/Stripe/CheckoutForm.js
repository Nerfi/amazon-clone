import React, {useState} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../StateProvider/StateProvider';
import {getBasketTotal} from '../../src/StateProvider/Reducer';
import {useHistory} from 'react-router-dom';



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

  const handleSubmit = async (event) => {

    event.preventDefault();
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {

      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: getBasketTotal(basket) * 100,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
        setProcessing(false)
        //after the transaction inf confirmed I should send the user to orders page, it's a good UI/UX
      } catch (error) {
        setError(error);
      }
    } else {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: 400 }}>
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
       {error && error}
    </form>
  );
};
export default CheckoutForm;
