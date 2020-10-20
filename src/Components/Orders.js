import React, {useState, useEffect} from 'react';
import './Orders.css';
import {db} from './firebase';
import {useStateValue} from '../StateProvider/StateProvider';
import Order from './Order';

const Orders = () => {

  const [{user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);



  useEffect(() => {

    const fetchingOrders = async () => {
      //not working

      if(user) {

       db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))

      } else {
        setOrders([]);

      }

    };

    fetchingOrders();

  },[user]);



  console.log(orders, 'orders');

  return(
    <div className="orders">
    <h1>Your orders</h1>
    <div className="orders__order">
      {orders.map(order => (
        <Order order={order}/>
        ))}
    </div>
    </div>
  )
};

export default Orders;
