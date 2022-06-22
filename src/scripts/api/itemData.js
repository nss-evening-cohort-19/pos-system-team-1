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

const deleteItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItems().then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteSingleItem = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItems(uid).then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const createItem = (itemObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, payload)
        .then(() => {
          getItems(uid).then((data) => resolve(data));
        });
    }).catch(reject);
});
const updateItem = (itemObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getItems(uid).then(resolve))
    .catch(reject);
});

const getItemsByOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="order_id"&equalTo="${firebaseKey}"`)
    .then((response) => {
      const filterResponse = Object.values(response.data).filter((item) => item.uid === uid);
      resolve(filterResponse);
    })
    .catch((error) => reject(error));
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
