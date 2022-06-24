import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addItemForm = (obj = {}, firebaseKey) => {
  clearDom();
  const domString = `
    <form
      id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}"
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
  <input 
    type ="hidden"
    class="form-control"
    id="editOrderId"
    aria-describedby="cardTitle"
    value="${obj.orderId}"
    required>
  <input 
    type ="hidden"
    class="form-control"
    id="addOrderId"
    aria-describedby="cardTitle"
    value="${firebaseKey}"
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
