import React from 'react';
import {useStateValue} from '../StateProvider/StateProvider';
import CheckoutProduct from './CheckoutProduct';

const WishesComponent = () => {

  const [{wishes}, ] = useStateValue();


  return <div className="checkout">

    <div className="checkout__left">

      <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad"/>

      {
        wishes?.length === 0 ? (
          <div>
            <h2>You  wishes list is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your wishes</h2>
            {wishes?.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                action="wishes"
                />
              ))}

          </div>
        )
    }
    </div>

  </div>
};

export default WishesComponent;
