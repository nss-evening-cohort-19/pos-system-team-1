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
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getOrders(orderObj.uid).then((data) => resolve(data));
        });
    }).catch(reject);
});
const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy= "order_id" &equalTo="${orderId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then((ordersArray) => resolve(ordersArray));
    })
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

const filterOrder = (uid, searchTerm) => new Promise((resolve, reject) => {
  getOrders(uid).then((orders) => {
    const filteredOrders = orders.filter((order) => order.orderName.toLowerCase() === searchTerm.toLowerCase() || order.customerPhone.toLowerCase() === searchTerm.toLowerCase());

    if (filteredOrders && filteredOrders.length > 0) {
      resolve(filteredOrders);
    } else { resolve([]); }
  }).catch((error) => reject(error));
});

export {
  getOrders,
  deleteOrders,
  createOrder,
  getSingleOrder,
  getClosedOrder,
  getOrderItems,
  deleteSingleOrder,
  updateOrder,
  filterOrder,
};
