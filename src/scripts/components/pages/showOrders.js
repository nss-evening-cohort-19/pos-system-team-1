import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyOrders = () => {
  document.querySelector('#view').innerHTML = '<h1>No Items</h1>';
};

const showOrders = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((obj) => {
      domString += `<div class="orders-card">
      <div class="card-body">
      <h5 class="card-title">${obj.orderName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${obj.closedStatus}</h6>
      <p class="card-phone">${obj.customerPhone}</p>
      <p class="card-date">${obj.customerEmail}</p>
      <p class="card-type">${obj.orderType}</p>
      <a href="#" id="details-order--${obj.orderFirebaseKey}">Details</a>
      <a href="#" id="update-order--${obj.orderFirebaseKey}">Edit</a>
      <a href="#" id="delete-order--${obj.orderFirebaseKey}">Delete</a>
      </div>
    </div>
    <br>`;
    });
    renderToDOM('#view', domString);
  } else {
    emptyOrders();
  }
};

export { showOrders, emptyOrders };
