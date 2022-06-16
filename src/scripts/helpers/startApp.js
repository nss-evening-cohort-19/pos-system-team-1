import domBuilder from '../components/domBuilder';
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import logoutButton from '../components/auth/logoutButton';
// import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  navbar();
  navbarEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  //   domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
};

export default startApp;
