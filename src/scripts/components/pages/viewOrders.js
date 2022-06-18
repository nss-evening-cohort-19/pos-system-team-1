import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewOrders = (array) => {
  clearDom();
  let domString = '';
  array.forEach((obj) => {
    domString += `<div class="order-card">
  <div class="card-body">
    <h5 class="card-title">${obj.orderName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${obj.closedStatus}</h6>
    <p class="card-phone">${obj.customerPhone}</p>
    <p class="card-date">${obj.customerEmail}</p>
    <p class="card-type">${obj.orderType}</p>
    <a href="#" class="details-order">Details</a>
    <a href="#" class="edit-order">Edit</a>
    <a href="#" class="delete-order">Delete</a>
    </div>
</div>`;
  });
  renderToDOM('#view', domString);
};
export default viewOrders;
