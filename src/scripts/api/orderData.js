import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteOrders = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => {
      getOrders().then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

// FIXME: CREATE AN ORDER
const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, orderObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getOrders(orderObj.uid).then((data) => resolve(data));
        });
    }).catch(reject);
});

// FIXME: GET SINGLE ORDER
const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getClosedOrder = (uid) => new Promise((resolve, reject) => {
  getOrders(uid).then((ordersArray) => {
    const closedOrders = ordersArray.filter((order) => order.orderStatus);
    resolve(closedOrders);
  }).catch((error) => reject(error));
});

const updateOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders().then(resolve))
    .catch(reject);
});
export {
  getOrders,
  deleteOrders,
  createOrder,
  getSingleOrder,
  getClosedOrder
};
