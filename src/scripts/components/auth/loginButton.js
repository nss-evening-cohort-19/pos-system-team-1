import signIn from '../../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;

  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
