// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/authentication/checkLoginStatus';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
};

init();
