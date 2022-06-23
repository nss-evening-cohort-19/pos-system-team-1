import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form
      id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}--${obj.orderId}` : `submit-item--${obj.orderId}`}"
      style="margin: 20px;border: 1px solid #d49186;padding: 20px;"
class="mb-4">
<div
  class="form-group">
  <label
    for="itemName">
    <b>
      Item Name
    </b>
  </label>
  <input
    type="text"
    class="form-control"
    id="itemName"
    aria-describedby="cardTitle"
    value="${obj.itemName || ''}"
    required>
</div>
<div
  class="form-group">
  <label
    for="itemPrice">
    <b>
      Item Price
    </b>
  </label>
  <input
    type="number"
    class="form-control"
    id="itemPrice"
    aria-describedby="cardTitle"
    value="${obj.itemPrice || ''}"
    required>
</div>
<button
  type="submit"
  class="btn btn-outline-dark">
  Add/Edit Item
</button>
</>`;
  renderToDOM('#form-container', domString);
};

export default addItemForm;
