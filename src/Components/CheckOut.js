import React from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

const CheckOut = () => {

  const [{basket}, dispatch] = useStateValue();
  console.log(basket, 'baskettt') //working

  return <div className="checkout">
    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad"/>

    {basket?.length === 0 ? (
        <div>
          <h2>You shopping basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket?.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}

        </div>
      )
  }

  </div>
};

export default CheckOut;
