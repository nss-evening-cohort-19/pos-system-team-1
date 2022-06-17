import { getOrders } from '../api/orderData';
import domBuilder from '../components/domBuilder';
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import logoutButton from '../components/auth/logoutButton';
import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
import { showOrders } from '../components/pages/orders';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  navbar();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navbarEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  getOrders().then((ordersArray) => showOrders(ordersArray));
};

export default startApp;
