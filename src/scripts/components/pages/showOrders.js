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
      <h6 class="card-subtitle mb-2 text-muted">Order Status: ${obj.closedStatus ? 'Closed' : 'Open'}</h6>
      <p class="card-phone">${obj.customerPhone}</p>
      <p class="card-date">${obj.customerEmail}</p>
      <p class="card-type">${obj.orderType}</p>
      <a href="#" id="details-order--${obj.firebaseKey}">Details</a>
      ${obj.closedStatus ? `<a href="#" style='color: grey;text-decoration: none;' id="done-order--${obj.firebaseKey}">Edit</a>` : `<a href="#" id="edit-order--${obj.firebaseKey}">Edit</a>`}
      <a href="#" id="delete-order--${obj.firebaseKey}">Delete</a>
      </div>
    </div>
    <br>`;
    });

    const filterButtonStr = `
      <div
        id="orderStatusOption">
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

    const showOrderDom = `<div>${filterButtonStr}<div style='display: flex;flex-wrap: wrap;justify-content: center;padding: 30px;'>${domString}</div></div>`;

    renderToDOM('#view', showOrderDom);
  } else {
    emptyOrders();
  }
};

export { showOrders, emptyOrders };
