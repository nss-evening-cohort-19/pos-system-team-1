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
<<<<<<< HEAD
      <a href="#" id="details-order--${obj.firebaseKey}">Details</a>
      <a href="#" id="edit-order--${obj.firebaseKey}">Edit</a>
      <a href="#" id="delete-order--${obj.firebaseKey}">Delete</a>
=======
      <a href="#" class="details-order">Details</a>
      <a href="#" class="edit-order" id="edit-order--${obj.firebaseKey}">Edit</a>
      <a href="#" class="delete-order">Delete</a>
>>>>>>> main
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
