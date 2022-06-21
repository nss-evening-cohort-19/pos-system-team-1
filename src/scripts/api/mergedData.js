import { getItemsByOrder } from './itemData';
import { getSingleOrder } from './orderData';

const viewItemsByOrder = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getItemsByOrder(orderObject.order_id);
      console.warn(orderObject.order_id)
        .then((itemObject) => {
          resolve({ itemObject, ...orderObject });
        });
    }).catch((error) => reject(error));
});

export default viewItemsByOrder;
