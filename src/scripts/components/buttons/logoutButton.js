import firebase from 'firebase/app';
import 'firebase/auth';
import renderToDOM from '../../helpers/renderToDom';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = `<button id="google-auth" class="btn btn-danger">
  <i class="fas fa-sign-out-alt logout"> Logout</button>`;
  renderToDOM('#logoutBtn', domString);
};
export { signMeOut, logoutButton };
