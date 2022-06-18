/* eslint-disable no-console */
import createOrderForm from '../components/forms/createAnOrderForm';
import { getOrders } from '../api/orderData';
import viewOrders from '../components/pages/viewOrders';
import homeLoggedIn from '../components/pages/homeLoggedIn';

// nav bar events
const navbarEvents = (user) => {
  // view order button click
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders(user.uid).then((orderArray) => viewOrders(orderArray));
  });

  // create order button click
  document.querySelector('#createOrder').addEventListener('click', () => {
    createOrderForm();
  });

  document.querySelector('#navbarTitle').addEventListener('click', () => {
    homeLoggedIn(user);
  });
};

export default navbarEvents;
