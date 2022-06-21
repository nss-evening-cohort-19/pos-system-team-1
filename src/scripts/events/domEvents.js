/* eslint-disable no-alert */
import { deleteSingleItem, getItems, getSingleItem } from '../api/itemData';
import { deleteOrders, getOrders, getSingleOrder } from '../api/orderData';
import createOrderForm from '../components/forms/createAnOrderForm';
import addItemForm from '../components/forms/addItemForm';
import addPaymentForm from '../components/forms/addPaymentForm';
import renderRevenue from '../components/pages/revenue';
import { showOrders } from '../components/pages/showOrders';
import { showItems } from '../components/pages/showItems';

const domEvents = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
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
    if (e.target.id.includes('order-details')) {
      getItems().then((itemArray) => showItems(itemArray));
    }
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => createOrderForm(orderObject));
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
    if (e.target.id.includes('delete-item-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleItem(firebaseKey).then((itemsArray) => showItems(itemsArray));
      }
    }
  });
};

export default domEvents;
