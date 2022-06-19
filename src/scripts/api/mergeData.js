import { getSingleItem, deleteSingleItem, deleteItems } from './itemData';
import { getSingleOrder } from './orderData';

const viewItemDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleItem(firebaseKey)
    .then((itemObject) => {
      getSingleOrder(itemObject.order_id).then((orderObject) => {
        resolve({ orderObject, ...itemObject });
      });
    }).catch((error) => reject(error));
});
const viewOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getSingleItem(orderObject.order_id).then((itemObject) => {
        resolve({ orderObject, ...itemObject });
      });
    }).catch((error) => reject(error));
});

const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
  deleteOrderItems(orderId).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((order) => deleteItems(order.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteSingleItem(orderId).then(resolve);
    });
  }).catch((error) => reject(error));
});
export { viewOrderDetails, viewItemDetails, deleteOrderItems };
