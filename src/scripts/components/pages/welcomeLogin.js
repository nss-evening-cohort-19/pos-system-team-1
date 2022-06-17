import loginButton from '../auth/loginButton';
import hoppizza from '../../../images/hoppizza.jpeg';

const welcomeLogin = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome POS!</h1>
    <img
      src=${hoppizza}
      style="height: 500px;margin-right: 8px;"><br />
    <div id="login-form-container"></div>
  `;
  loginButton();
};

export default welcomeLogin;
