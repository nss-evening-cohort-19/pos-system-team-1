import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

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

const emptyOrders = () => {
  const emptyOrderDom = `<div>${filterButtonStr}<div style='display: flex;flex-wrap: wrap;justify-content: center;padding: 30px;'><h1>No Orders</h1><div><div>`;

  renderToDOM('#view', emptyOrderDom);
};

const showOrders = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((obj) => {
      domString += `<div class="orders-card">
      <div class="card-body">
      <h5 style="font-weight: bold; class="card-title">${obj.orderName}</h5><hr>
      <h6 class="card-subtitle mb-2 text-muted">Order Status: ${obj.closedStatus ? 'Closed' : 'Open'}</h6>
      <p class="card-phone">${obj.customerPhone}</p>
      <p class="card-date">${obj.customerEmail}</p>
      <p class="card-type">${obj.orderType}</p>
      <p style="font-weight: bold; class="card-date">${obj.orderDate}</p>
      <i class="btn btn-success fas fa-eye"  id="details-order--${obj.firebaseKey}"></i>
      ${obj.closedStatus ? `<i class="fas fa-edit btn btn-info" style='color: grey;text-decoration: none;' id="done-order--${obj.firebaseKey}"></i>` : `<i class="fas fa-edit btn btn-info" id="edit-order--${obj.firebaseKey}"></i>`}
      <i class="btn btn-danger fas fa-trash-alt" id="delete-order--${obj.firebaseKey}"></i>
      </div>
    </div>
    <br>`;
    });

    const showOrderDom = `<div>${filterButtonStr}<div style='display: flex;flex-wrap: wrap;justify-content: center;padding: 30px;'>${domString}</div></div>`;

    renderToDOM('#view', showOrderDom);
  } else {
    emptyOrders();
  }
};

export { showOrders, emptyOrders };
