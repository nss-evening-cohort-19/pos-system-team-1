import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrders = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getOrders().then((ordersArray) => resolve(ordersArray));
        });
    }).catch(reject);
});

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy= "orderId" &equalTo="${orderId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`, uid)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteSingleOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`, uid)
    .then(() => {
      getOrders(uid).then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

const getClosedOrder = (uid) => new Promise((resolve, reject) => {
  getOrders(uid).then((ordersArray) => {
    const closedOrders = ordersArray.filter((order) => order.orderStatus);
    resolve(closedOrders);
  }).catch((error) => reject(error));
});

const updateOrder = (orderObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders(uid).then(resolve))
    .catch(reject);
});

const filterOrder = (uid, { name, phone, orderStatus }) => new Promise((resolve, reject) => {
  getOrders(uid).then((orders) => {
    let filteredOrders = [];
    if (name) {
      filteredOrders = orders.filter((order) => order.orderName.toLowerCase() === name.toLowerCase());
    } else if (phone) {
      filteredOrders = orders.filter((order) => order.customerPhone.toLowerCase() === phone.toLowerCase());
    } else if (orderStatus !== undefined) {
      filteredOrders = orders.filter((order) => (order.closedStatus === orderStatus));
    }

    if (filteredOrders && filteredOrders.length > 0) {
      resolve(filteredOrders);
    } else { resolve([]); }
  }).catch((error) => reject(error));
});

export {
  getOrders,
  createOrder,
  getSingleOrder,
  getClosedOrder,
  getOrderItems,
  deleteSingleOrder,
  updateOrder,
  filterOrder,
};
