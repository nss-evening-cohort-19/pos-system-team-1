import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

export const getRevenue = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/revenue.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data))).catch(reject);
});

export const updateRevenue = (revenueData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/revenue.json`, revenueData)
    .then((response) => resolve(response.data)).catch(reject);
});

export default updateRevenue;
