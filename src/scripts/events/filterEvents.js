import { filterOrder } from '../api/orderData';
import { showOrders } from '../components/pages/showOrders';

export const registerSearchEvents = (user) => {
  document.querySelector('#searchBtn').addEventListener('click', () => {
    const searchKey = document.querySelector('#searchOption').value;
    const searchTerm = document.querySelector('#searchBar').value;

    filterOrder(user.uid, { [searchKey]: searchTerm }).then((orderArray) => showOrders(orderArray));
  });
};

export const registerOrderStatusFilter = (user) => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('orderStatusOpen')) {
      filterOrder(user.uid, { orderStatus: false }).then((orderArray) => showOrders(orderArray));
    }

    if (e.target.id.includes('orderStatusClosed')) {
      filterOrder(user.uid, { orderStatus: true }).then((orderArray) => showOrders(orderArray));
    }
  });
};
