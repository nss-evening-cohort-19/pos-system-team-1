import loginButton from '../auth/loginButton';
import hipHopRecord from '../../../images/hhpw-record.png';
import snoop from '../../../images/snoopdoggHiphop.gif';

const welcomeLogin = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome! Please Log In!</h1>
    <img
      src=${hipHopRecord}
      style="height: 300px;margin-right: 8px;"><br />
    <div id="login-form-container"></div>
    <img class="snoop"
      src=${snoop}
      style="height: 200px;margin-right: 8px;"><br />
  `;
  loginButton();
};

export default welcomeLogin;
