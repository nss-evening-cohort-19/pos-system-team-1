/* eslint-disable no-console */
import createOrderForm from '../components/forms/createAnOrderForm';

// nav bar events
const navbarEvents = () => {
  // view order button click
  document.querySelector('#viewOrders')
    .addEventListener('click', () => console.log('viewOrders button clicked'));

  // create order button click
  document.querySelector('#createOrder').addEventListener('click', createOrderForm);
};

export default navbarEvents;
