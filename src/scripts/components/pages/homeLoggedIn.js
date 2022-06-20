import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const homeLoggedIn = (user) => {
  clearDom();
  const domString = `
  <div>
    <h1>
      Welcome ${user.displayName}!
    </h1>
    <div
      style='display: flex;flex-direction: column;'>
      <button
        type="button"
        class="btn btn-success"
        style='margin: 10px 0px;'
        id="viewOrderBtn">
        View Orders
      </button>
      <button
        type="button"
        class="btn btn-warning"
        style='margin: 10px 0px;'
        id="createOrderBtn">
        Create an Order
      </button>
      <button
        type="button"
        class="btn btn-danger"
        style='margin: 10px 0px;'
        id="viewRevBtn">
        View Revenue
      </button>
    </div>
  </div>
  
  `;
  renderToDOM('#view', domString);
};

export default homeLoggedIn;
