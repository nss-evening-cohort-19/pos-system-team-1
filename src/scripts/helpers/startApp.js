import domBuilder from '../components/domBuilder';
import navbar from '../components/pages/navBar';
import navbarEvents from '../events/navbarEvents';
import domEvents from '../events/domEvents';
import homeLoggedIn from '../components/pages/homeLoggedIn';
import formEvents from '../events/formEvents';
import filterEvents from '../events/filterEvents';

const startApp = (user) => {
  domBuilder();
  navbar();
  homeLoggedIn(user);
  domEvents(user.uid);
  navbarEvents(user);
  formEvents(user.uid);
  filterEvents(user);
};

export default startApp;
