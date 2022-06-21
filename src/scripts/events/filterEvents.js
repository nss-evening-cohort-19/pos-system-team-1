import { filterOrder } from '../api/orderData';
import { showOrders } from '../components/pages/showOrders';

export const filterSearchEvents = (user) => {
  document.querySelector('#searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchBar').value;
    filterOrder(user.uid, searchTerm).then((orderArray) => showOrders(orderArray));
  });
};

 const filterClosedStatus = (user) => {
    document.querySelector('#searchBtn').addEventListener('click', () => {
      const searchTerm = document.getElementById('searchBar').value;
      filterOrder(user.uid, searchTerm).then((orderArray) => showOrders(orderArray));
    }); 
};

export {filterSearchEvents, filterClosedStatus };
