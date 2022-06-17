import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewOrders = (array) => {
  clearDom();
  let domString = '';
  array.forEach((obj) => {
    domString += `<div class="order-card">
  <div class="card-body">
    <h5 class="card-title">${obj.orderName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${obj.orderStatus}</h6>
    <p class="card-phone">${obj.cusomerPhone}</p>
    <p class="card-date">${obj.customerEmail}</p>
    <a href="#" class="card-link">Details</a>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
    </div>
</div>`;
  });
  renderToDOM('#view', domString);
};
export default viewOrders;
