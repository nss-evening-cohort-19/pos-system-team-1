import domBuilder from '../components/domBuilder';
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import logoutButton from '../components/auth/logoutButton';
import homeLoggedIn from '../components/pages/homeLoggedIn';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();// BUILD THE DOM
  navbar();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  homeLoggedIn(user);
  navbarEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  //   domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
};

export default startApp;
