import domBuilder from '../components/domBuilder';
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import domEvents from '../events/domEvents';
import homeLoggedIn from '../components/pages/homeLoggedIn';
import formEvents from '../events/formEvents';
import { registerSearchEvents, registerOrderStatusFilter } from '../events/filterEvents';

const startApp = (user) => {
  domBuilder();
  navbar();
  homeLoggedIn(user);
  domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navbarEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  registerSearchEvents(user);
  registerOrderStatusFilter(user);
};

export default startApp;
