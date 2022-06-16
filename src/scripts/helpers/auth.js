import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/auth/loginButton';
import firebaseConfig from '../api/apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
    } else {
      loginButton();
    }
  });
};

export default checkLoginStatus;
