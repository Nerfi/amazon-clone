import React from 'react';
import './Order.css';
import moment from "moment";
import OrderSummary from './OrderSummary';
import CurrencyFormat from "react-currency-format";

const Order = ({order}) => {
  return(
    <div className="order">
      <h2>Order</h2>
      <p>Your identificador: <strong>{order.id}</strong></p>

      {order.data.basket.map(item => (
        <OrderSummary
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}

        />
      ))}
       <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />


    </div>
  )
};

export default Order;
