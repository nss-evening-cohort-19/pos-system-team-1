import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../api/apiKeys';
import { welcomeLogin } from '../pages/welcomeLogin';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
    } else {
      // person is NOT logged in
      welcomeLogin();
    }
  });
};
export default checkLoginStatus;
