import { createOrder, updateOrder } from '../api/orderData';
import { showOrders } from '../components/pages/showOrders';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const orderObject = {
        orderName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value
      };

      createOrder(orderObject).then((ordersArray) => showOrders(ordersArray));
    }

    // TODO: CLICK EVENT FOR EDITING A Card
    if (e.target.id.includes('update-order')) {
      const [, orderFirebaseKey] = e.target.id.split('--');
      const orderObject = {
        orderName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('').value,
        orderFirebaseKey
      };

      updateOrder(orderObject).then(showOrders);
    }
  });
};

export default formEvents;
