const homeLoggedIn = (user) => {
  document.querySelector('#view').innerHTML = `
  <h1>Welcome ${user.displayName}!</h1>
  <button type="button" class="btn btn-success">View Orders</button>
  <button type="button" class="btn btn-warning">Create an Order</button>
  <button type="button" class="btn btn-danger">View Revenue</button>
  `;
};

export default homeLoggedIn;
