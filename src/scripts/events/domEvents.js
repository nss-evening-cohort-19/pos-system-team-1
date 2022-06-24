/* eslint-disable no-alert */
import { deleteSingleItem, getSingleItem } from '../api/itemData';
import { deleteSingleOrder, getOrders, getSingleOrder } from '../api/orderData';
import createOrderForm from '../components/forms/createAnOrderForm';
import addItemForm from '../components/forms/addItemForm';
import addPaymentForm from '../components/forms/addPaymentForm';
import renderRevenue from '../components/pages/revenue';
import { showOrders } from '../components/pages/showOrders';
import { viewItemsByOrder } from '../api/mergedData';
import { showItems } from '../components/pages/showItems';

const domEvents = (uid) => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.warn(e.target.id);
        deleteSingleOrder(firebaseKey).then((ordersArray) => showOrders(ordersArray));
      }
    }
  });
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders(uid).then((orderArray) => showOrders(orderArray));
    }
    if (e.target.id.includes('createOrderBtn')) {
      createOrderForm(uid);
    }
    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const obj = {};
      addItemForm(obj, firebaseKey);
    }
    if (e.target.id.includes('viewRevBtn')) {
      renderRevenue();
    }
    if (e.target.id.includes('details-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewItemsByOrder(firebaseKey).then((itemsArray) => showItems(itemsArray, firebaseKey));
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
        getSingleItem(firebaseKey).then((itemObject) => deleteSingleItem(itemObject, firebaseKey))
          .then((itemsArray) => showItems(itemsArray, itemsArray[0].orderId));
      }
    }
  });
};

export default domEvents;
