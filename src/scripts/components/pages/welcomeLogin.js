import loginButton from '../components/buttons/loginButton';

const welcomeLogin = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome POS!</h1>
    <p>Please sign in to access app.</p><br />
    <div id="login-form-container"></div>
  `;
  loginButton();
};

export { welcomeLogin, loginButton };
