/* eslint-disable no-console */
import createOrderForm from '../components/forms/createAnOrderForm';
import { getOrders } from '../api/orderData';
import { showOrders } from '../components/pages/showOrders';

// nav bar events
const navbarEvents = () => {
  // view order button click
  document.querySelector('#viewOrders')
    .addEventListener('click', () => {
      getOrders().then((orderArray) => showOrders(orderArray));
    });

  // create order button click
  document.querySelector('#createOrder').addEventListener('click', createOrderForm);
};

export default navbarEvents;
