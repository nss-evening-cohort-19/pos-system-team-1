import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="orderId"&equalTo="${orderId}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});
// const getItemsByOrder = (orderId) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/items.json?orderBy="orderId"&equalTo="${orderId}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

const getItemsByOrder = (orderFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="order_id"&equalTo="${orderFirebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItemsByOrder().then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteSingleItem = (itemObject, firebaseKey) => new Promise((resolve, reject) => {
  const orderId = itemObject.order_id;
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItemsByOrder(orderId).then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const createItem = (itemObj, orderId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, payload)
        .then(() => {
          getItemsByOrder(orderId).then((data) => resolve(data));
        });
    }).catch(reject);
});
// const updateItem = (itemObj, orderId) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/items/${itemObj.firebaseKey}.json`, itemObj)
//     .then(() => getItemsByOrder(orderId).then(resolve))
//           getItemsByOrder(itemObj.order_id).then((data) => resolve(data));
//         });
//     }).catch(reject);
// });

const updateItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getItemsByOrder(itemObj.order_id).then(resolve))
    .catch(reject);
});

export {
  getItems,
  getSingleItem,
  deleteItems,
  deleteSingleItem,
  createItem,
  updateItem,
  getItemsByOrder
};
