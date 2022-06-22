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
      <i class="btn btn-success fas fa-eye" id="details-order--${obj.firebaseKey}"></i>
      <i class="fas fa-edit btn btn-warning" id="edit-order--${obj.firebaseKey}"></i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-order--${obj.firebaseKey}"></i>
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
