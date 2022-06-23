import { createItem, updateItem } from '../api/itemData';
import { createOrder, updateOrder, getSingleOrder } from '../api/orderData';
import { showItems } from '../components/pages/showItems';
import { showOrders } from '../components/pages/showOrders';

const formEvents = (uid, orderId) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const orderObject = {
        orderName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value,
        closedStatus: false,
        uid
      };

      createOrder(orderObject, uid).then((ordersArray) => showOrders(ordersArray));
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        orderName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value,
        closedStatus: false,
        firebaseKey,
        uid
      };

      updateOrder(orderObject, uid).then(showOrders);
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey, orderFirebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey, 'fb');
      console.warn(orderFirebaseKey, 'orderID');
      const itemObject = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: parseInt(document.querySelector('#itemPrice').value, 10),
        firebaseKey,
        uid,
        orderId: orderFirebaseKey
      };
      updateItem(itemObject, orderId).then((itemsArray) => {
        showItems(itemsArray, orderFirebaseKey);
      });
    }

    if (e.target.id.includes('submit-item')) {
      const [, orderFirebaseKey] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: parseInt(document.querySelector('#itemPrice').value, 10),
        uid: `${uid}`,
        orderId: orderFirebaseKey
      };
      createItem(itemObject, orderId).then((itemsArray) => showItems(itemsArray, orderFirebaseKey));
    }

    if (e.target.id.includes('update-payment')) {
      const orderFbkey = e.target.id.split('update-payment--')[1];

      getSingleOrder(orderFbkey)
        .then((order) => {
          const updatedOrder = { ...order, closedStatus: true };
          updateOrder(updatedOrder).then(showOrders);
        });
    }
  });
};

export default formEvents;
