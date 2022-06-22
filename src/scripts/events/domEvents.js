/* eslint-disable no-alert */
import { deleteSingleItem, getSingleItem } from '../api/itemData';
import { getOrders, getSingleOrder } from '../api/orderData';
import createOrderForm from '../components/forms/createAnOrderForm';
import addItemForm from '../components/forms/addItemForm';
import addPaymentForm from '../components/forms/addPaymentForm';
import renderRevenue from '../components/pages/revenue';
import { showOrders } from '../components/pages/showOrders';
import { showItems } from '../components/pages/showItems';
import { deleteOrderItems, viewItemsByOrder } from '../api/mergedData';

const domEvents = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-order')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.warn(e.target.id);
        deleteOrderItems(firebaseKey).then(showOrders);
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
      const orderId = e.target.id.split('checkout--')[1];
      addPaymentForm({ firebaseKey: orderId });
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
          .then((itemsArray) => showItems(itemsArray, itemsArray[0].order_id));
      }
    }
  });
};

export default domEvents;
