import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const homeLoggedIn = (user) => {
  clearDom();
  const domString = `
  <h1>Welcome ${user.displayName}!</h1>
  <button type="button" class="btn btn-success" id="viewOrderBtn">View Orders</button>
  <button type="button" class="btn btn-warning" id="createOrderBtn">Create an Order</button>
  <button type="button" class="btn btn-danger" id="viewRevBtn">View Revenue</button>
  `;
  renderToDOM('#view', domString);
};

export default homeLoggedIn;
