import { getItemsByOrder, deleteItems } from './itemData';
import { getSingleOrder, deleteSingleOrder, getOrderItems } from './orderData';

const viewItemsByOrder = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getItemsByOrder(orderObject.firebaseKey)
        .then((itemObject) => {
          resolve(Object.values(itemObject));
        });
    }).catch((error) => reject(error));
});

const deleteOrderItems = (orderId, uid) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((items) => deleteItems(items.firebaseKey));
    // console.warn(deleteItemPromises);
    Promise.all(deleteItemPromises).then(() => {
      deleteSingleOrder(orderId, uid).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewItemsByOrder, deleteOrderItems };
