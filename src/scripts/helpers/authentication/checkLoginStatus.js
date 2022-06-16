import firebase from 'firebase/app';
import 'firebase/auth';
import welcomeLogin from '../../components/pages/welcomeLogin';
import firebaseConfig from '../../api/apiKeys';
import startApp from '../startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
    } else {
      welcomeLogin();
    }
  });
};

export default checkLoginStatus;
