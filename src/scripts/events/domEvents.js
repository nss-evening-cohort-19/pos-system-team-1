import { getSingleItem } from '../api/itemData';
import { deleteOrders, getOrders, getSingleOrder } from '../api/orderData';
import createOrderForm from '../components/forms/createAnOrderForm';
import addItemForm from '../components/forms/addItemForm';
import addPaymentForm from '../components/forms/addPaymentForm';
import renderRevenue from '../components/pages/revenue';
import { showOrders } from '../components/pages/showOrders';
import { showItems } from '../components/pages/showItems';
import viewOrderDetails from '../api/mergedData';

const domEvents = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.warn(e.target.id);
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
    if (e.target.id.includes('add-item-btn')) {
      addItemForm();
    }
    if (e.target.id.includes('viewRevBtn')) {
      renderRevenue();
    }
    if (e.target.id.includes('details-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewOrderDetails(firebaseKey).then((orderItemsObject) => showItems(orderItemsObject));
    }
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((wordObject) => createOrderForm(wordObject));
    }
    if (e.target.id.includes('checkout')) {
      addPaymentForm();
    }
  });
  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObject) => addItemForm(itemObject));
    }
  });
};

export default domEvents;
