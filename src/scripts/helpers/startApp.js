import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
// import domEvents from '../events/domEvents';
import navEvents from '../components/events/navEvents';
// import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  //   domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  //   formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navbar();
  navEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  //   // TODO: Put all cards on the DOM on App load
};

export default startApp;
