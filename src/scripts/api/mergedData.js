import { deleteItems, getItemsByOrder } from './itemData';
import { getSingleOrder, getOrderItems, deleteSingleOrder } from './orderData';

const viewItemsByOrder = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getItemsByOrder(orderObject.firebaseKey)
        .then((itemObject) => {
          resolve(Object.values(itemObject));
        });
    }).catch((error) => reject(error));
});
const deleteOrderItems = (orderId) => new Promise((resolve, reject) => {
  getOrderItems(orderId).then((itemsArray) => {
    const deleteItemPromises = itemsArray.map((items) => deleteItems(items.firebaseKey));
    // console.warn(deleteItemPromises);
    Promise.all(deleteItemPromises).then(() => {
      deleteSingleOrder(orderId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewItemsByOrder, deleteOrderItems };
