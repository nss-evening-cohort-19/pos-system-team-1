import domBuilder from '../components/domBuilder';
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import logoutButton from '../components/auth/logoutButton';
import domEvents from '../events/domEvents';
import homeLoggedIn from '../components/pages/homeLoggedIn';
import formEvents from '../events/formEvents';
import filterEvents from '../events/filterEvents';

const startApp = (user) => {
  domBuilder();// BUILD THE DOM
  navbar();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  homeLoggedIn(user);
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navbarEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  filterEvents(user);
};

export default startApp;
