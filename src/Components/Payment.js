import React from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import CheckoutProduct from  './CheckoutProduct';
const Payment = () => {

  const [{user, basket},dispatch] = useStateValue();


  return(
    <div className="payment">

      <div className="payment__container">

        <div className="payment__section">

          <div className="payment__title">
            <h3>delivery adress</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email} </p>
            <p>123 no adrres</p>
            <p>search for adrres on docs, no in this tutorial </p>
          </div>

        </div>


        <div className="payment__section">
          <div className="payment__title">
          <h3>review items and delivery</h3>
          </div>

          <div className="payment__item">
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
          </div>
        </div>


        <div className="payment__section">

        </div>

      </div>

    </div>
  )

};

export default Payment;
