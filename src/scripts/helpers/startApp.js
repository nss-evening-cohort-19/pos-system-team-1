import { getOrders } from '../api/orderData';
import domBuilder from '../components/domBuilder';
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import logoutButton from '../components/auth/logoutButton';
<<<<<<< HEAD
import domEvents from '../events/domEvents';
=======
import homeLoggedIn from '../components/pages/homeLoggedIn';
// import domEvents from '../events/domEvents';
>>>>>>> main
// import formEvents from '../events/formEvents';
import { showOrders } from '../components/pages/orders';

const startApp = (user) => {
  domBuilder();// BUILD THE DOM
  navbar();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
<<<<<<< HEAD
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navbarEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
=======
  homeLoggedIn(user);
  navbarEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  //   domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
>>>>>>> main
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  getOrders().then((ordersArray) => showOrders(ordersArray));
};

export default startApp;
