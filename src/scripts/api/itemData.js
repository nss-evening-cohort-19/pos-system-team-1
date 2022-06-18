import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItems().then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, payload)
        .then(() => {
          getItems(itemObj).then((data) => resolve(data));
        });
    }).catch(reject);
});
const updateItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getItems().then(resolve))
    .catch(reject);
});

export {
  getItems,
  getSingleItem,
  deleteSingleItem,
  createItem,
  updateItem
};
