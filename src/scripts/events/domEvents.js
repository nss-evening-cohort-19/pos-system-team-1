import { deleteOrders, getOrders } from '../api/orderData';
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
  document.querySelector('#view')
    .addEventListener('click', () => {
      getOrders().then((orderArray) => showOrders(orderArray));
    });
};

export default domEvents;
