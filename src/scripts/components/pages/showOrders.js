import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyOrders = () => {
  document.querySelector('#view').innerHTML = '<h1>No Items</h1>';
};

const showOrders = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `<div class="orders-card">
      <div class="card-body">
      <h5 class="card-title">${item.orderName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.closedStatus}</h6>
      <p class="card-phone">${item.customerPhone}</p>
      <p class="card-date">${item.customerEmail}</p>
      <p class="card-type">${item.orderType}</p>
      <a href="#" class="link-success" id="details-order--${item.firebaseKey}">Details</a>
      <a href="#" class="link-warning" id="edit-order--${item.firebaseKey}">Edit</a>
      <a href="#" class="link-danger" id="delete-order--${item.firebaseKey}">Delete</a>
      </div>
    </div>
    <br>`;
    });

    const filterButtonStr = `
      <div>
        <div
          class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="orderStatusOpen"
            value="orderStatusOpen">
            <label
              class="form-check-label"
              for="orderStatusOpen">
              Open
            </label>
        </div>
        <div
          class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="orderStatusClosed"
            value="orderStatusClosed">
            <label
              class="form-check-label"
              for="orderStatusClosed">
              Closed
            </label>
        </div>
      </div>`;

    renderToDOM('#view', `${filterButtonStr}${domString}`);
  } else {
    emptyOrders();
  }
};

export { showOrders, emptyOrders };
