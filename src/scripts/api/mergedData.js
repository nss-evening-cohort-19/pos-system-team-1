import { getItemsByOrder } from './itemData';
import { getSingleOrder } from './orderData';

const viewItemsByOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey)
    .then((orderObject) => {
      getItemsByOrder(orderObject.firebaseKey, uid)
        .then((itemObject) => {
          resolve(Object.values(itemObject));
          // ({ orderObject, ...itemObject });
        });
    }).catch((error) => reject(error));
});

export default viewItemsByOrder;
