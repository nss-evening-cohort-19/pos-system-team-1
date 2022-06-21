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
      <a href="#" id="details-order--${obj.firebaseKey}">Details</a>
      <a href="#" id="edit-order--${obj.firebaseKey}">Edit</a>
      <a href="#" id="delete-order--${obj.firebaseKey}">Delete</a>
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
            id="oderStatusOpen"
            value="oderStatusOpen">
            <label
              class="form-check-label"
              for="oderStatusOpen">
              Open
            </label>
        </div>
        <div
          class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="oderStatusClosed"
            value="oderStatusClosed">
            <label
              class="form-check-label"
              for="oderStatusClosed">
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
