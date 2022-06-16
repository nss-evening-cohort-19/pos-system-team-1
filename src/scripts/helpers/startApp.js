import logoutButton from '../components/auth/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/pages/navBar';
import navEvents from '../events/navEvents';
// import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  navEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  //   // TODO: Put all cards on the DOM on App load
};
export default startApp;
