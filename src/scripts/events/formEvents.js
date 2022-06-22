import { createItem, updateItem } from '../api/itemData';
import { createOrder, updateOrder, getSingleOrder } from '../api/orderData';
import { showItems } from '../components/pages/showItems';
import { showOrders } from '../components/pages/showOrders';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const orderObject = {
        orderName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value,
        closedStatus: false
      };

      createOrder(orderObject).then((ordersArray) => showOrders(ordersArray));
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const orderObject = {
        orderName: document.querySelector('#orderName').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#order-type').value,
        closedStatus: false,
        firebaseKey
      };

      updateOrder(orderObject).then(showOrders);
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: parseInt(document.querySelector('#itemPrice').value, 10),
        firebaseKey,
      };
      updateItem(itemObject).then((itemsArray) => showItems(itemsArray));
    }

    if (e.target.id.includes('submit-item')) {
      const itemObject = {
        itemName: document.querySelector('#itemName').value,
        itemPrice: parseInt(document.querySelector('#itemPrice').value, 10),
      };
      createItem(itemObject).then((itemsArray) => showItems(itemsArray));
    }

    if (e.target.id.includes('update-payment')) {
      const orderId = e.target.id.split('update-payment--')[1];

      getSingleOrder(orderId)
        .then((order) => {
          const updatedOrder = { ...order, closedStatus: true };
          updateOrder(updatedOrder).then(showOrders);
        });
    }
  });
};

export default formEvents;
