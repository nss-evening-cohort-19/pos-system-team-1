import { getOrders } from '../../api/orderData';
import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
// import formEvents from '../events/formEvents';
import { showOrders } from '../components/pages/orders';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navbar();
  navEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  //   // TODO: Put all cards on the DOM on App load
  getOrders().then((ordersArray) => showOrders(ordersArray));
};

export default startApp;
