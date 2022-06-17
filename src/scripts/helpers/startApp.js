import { getOrders } from '../../api/orderData';
import domBuilder from '../components/domBuilder';
<<<<<<< HEAD
import navbar from '../components/navbar';
import domEvents from '../components/events/domEvents';
import navEvents from '../components/events/navEvents';
=======
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import logoutButton from '../components/auth/logoutButton';
// import domEvents from '../events/domEvents';
>>>>>>> main
// import formEvents from '../events/formEvents';
import { showOrders } from '../components/pages/orders';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
<<<<<<< HEAD
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navbar();
  navEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  //   // TODO: Put all cards on the DOM on App load
  getOrders().then((ordersArray) => showOrders(ordersArray));
=======
  navbar();
  navbarEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  //   domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
>>>>>>> main
};

export default startApp;
