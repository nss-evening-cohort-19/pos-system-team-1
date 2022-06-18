import { getItems } from '../api/itemData';
import { deleteOrders, getOrders } from '../api/orderData';
import createOrderForm from '../components/forms/createAnOrderForm';
import { showItems } from '../components/pages/items';
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
    if (e.target.id.includes('details-order')) {
      // const [, orderFirebaseKey] = e.target.id.split('--');
      getItems().then((itemArray) => showItems(itemArray));
    }
  });
};

export default domEvents;
