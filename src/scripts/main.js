// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/checkLoginStatus';
import 'bootstrap';
import '../styles/main.scss';
import { welcomeLogin } from './components/pages/welcomeLogin';

const init = () => {
  welcomeLogin();
  checkLoginStatus();
};

init();
