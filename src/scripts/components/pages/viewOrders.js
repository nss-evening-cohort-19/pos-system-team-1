import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewOrders = (array) => {
  clearDom();

  let domString = '';
  domString += `<div class="order-card">
  <div class="card-body">
    <h5 class="card-title">${array.orderName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${array.orderStatus}</h6>
    <p class="card-phone">${array.cusomerPhone}</p>
    <p class="card-date">${array.customerEmail}</p>
    <a href="#" class="card-link">Details</a>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
    </div>
  </div>`;

  renderToDOM('#view', domString);
};
export default viewOrders;
