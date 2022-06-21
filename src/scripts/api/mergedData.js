orderObject.order_idimport { getItemsByOrder } from './itemData';
import { getSingleOrder } from './orderData';

const viewItemsByOrder = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getItemsByOrder(orderObject.firebaseKey)
        .then((itemObject) => {
          resolve({ orderObject, ...itemObject });
        });
    }).catch((error) => reject(error));
});

export default viewItemsByOrder;
