import React from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import CheckoutProduct from  './CheckoutProduct';
import './Payment.css';
import {Link} from 'react-router-dom';
import Stripe from "../Stripe/StripeContainer";

const Payment = () => {

  const [{user, basket},dispatch] = useStateValue();


  return(
    <div className="payment">

      <div className="payment__container">

      <h1>

      checkout (
        <Link to="/checkout">{basket?.length}items</Link>
        )

      </h1>

        <div className="payment__section">

          <div className="payment__title">
            <h3>delivery adress</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email} </p>
            <p>742 Evergreen Terrace </p>
            <p>   Springfield </p>
          </div>

        </div>


        <div className="payment__section">

          <div className="payment__title">
          <h3>review items and delivery</h3>
          </div>

          <div className="payment__items">

            {basket.map(item => (
              <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              action='payment'
              />
            ))}

          </div>
        </div>


        <div className="payment__section">

          <Stripe/>

        </div>

      </div>

    </div>
  )

};

export default Payment;
