import { deleteOrders, getOrders } from '../api/orderData';
import createOrderForm from '../components/forms/createAnOrderForm';
import renderRevenue from '../components/pages/revenue';
import { showOrders } from '../components/pages/showOrders';

const domEvents = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrders(firebaseKey).then((ordersArray) => showOrders(ordersArray));
      }
    }
  });
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then((orderArray) => showOrders(orderArray));
    }
    if (e.target.id.includes('createOrderBtn')) {
      createOrderForm();
    }
    if (e.target.id.includes('viewRevBtn')) {
      renderRevenue();
    }
  });
};

export default domEvents;
