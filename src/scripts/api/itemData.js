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

const deleteSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getItems().then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});
export { getItems, deleteSingleItem };
