import { getSingleItem, deleteSingleItem, deleteItems } from './itemData';
import { getSingleOrder, getOrderItems } from './orderData';

const viewOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getSingleItem(orderObject.order_id).then((itemObject) => {
        resolve({ orderObject, ...itemObject });
      });
    }).catch((error) => reject(error));
});

const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((items) => deleteItems(items.firebaseKey));
    console.warn(deleteItemPromises);
    Promise.all(deleteItemPromises).then(() => {
      deleteSingleItem(orderId).then(resolve);
    });
  }).catch((error) => reject(error));
});
export { viewOrderDetails, deleteOrderItems };
