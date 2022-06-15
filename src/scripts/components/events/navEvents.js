import { signMeOut } from '../buttons/logoutButton';

const navEvents = () => {
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default navEvents;
