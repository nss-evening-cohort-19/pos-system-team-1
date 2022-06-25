import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addPaymentForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form
      id=${obj.firebaseKey ? `update-payment--${obj.firebaseKey}` : 'submit-payment'}
      style="margin: 20px;border: 1px solid #d49186;padding: 20px;"
      class="mb-4">
      <div>
      <label
        for="title">
      Payment type
      </label>
      <select
      class="form-select"
      aria-label="Default select example">
      <option
        selected>
        Select a Payment Type
      </option>
      <option
        value="1">
        Cash
      </option>
      <option
        value="2">
        Credit
      </option>
      <option
        value="3">
        Mobile
      </option>
      value="${obj.paymentType || ''}"
      required>
</select>
</div>
<div
  class="form-group">
  <label
    for="title">
    <b>
      Tip Amount
    </b>
  </label>
  <input
    type="number"
    class="form-control"
    id="tipAmount"
    aria-describedby="cardTitle"
    value="${obj.tipAmount || 0}"
    required>
</div>
<button
  type="submit"
  class="btn btn-outline-dark">
  Close Order
</button>
</>`;

  renderToDOM('#form-container', domString);
};

export default addPaymentForm;
