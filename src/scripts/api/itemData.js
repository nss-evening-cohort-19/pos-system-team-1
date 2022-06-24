import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getItems = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteItems = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`, uid)
    .then(() => {
      getItems().then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const getSingleItem = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`, uid)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getItemsByOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="orderId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteSingleItem = (itemObject, firebaseKey) => new Promise((resolve, reject) => {
  const orderIds = itemObject.orderId;
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItemsByOrder(orderIds).then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, payload)
        .then(() => {
          getItemsByOrder(itemObj.orderId).then((data) => resolve(data));
        });
    }).catch(reject);
});

const updateItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getItemsByOrder(itemObj.orderId).then(resolve))
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
