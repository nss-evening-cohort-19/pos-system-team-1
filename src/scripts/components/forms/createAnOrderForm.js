import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `<form
    id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}"
    style="margin: 20px;border: 1px solid #d49186;padding: 20px;"
    class="mb-4">
    <div
      class="form-group">
      <label
        for="orderName">
        <b>
        Order Name
        </b>
      </label>
      <input
        type="text"
        class="form-control"
        id="orderName"
        aria-describedby="cardTitle"
        value="${obj.orderName || ''}"
        required>
    </div>
    <div
      class="form-group">
      <label
        for="phone">
        Customer phone
      </label>
      <input
        type="tel"
        class="form-control"
        id="phone"
        aria-describedby="Phone"
        value="${obj.customerPhone || ''}"
        required>
    </div>
    <div
      class="form-group">
      <label
        for="email">
        Customer email
      </label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="Email"
        value="${obj.customerEmail || ''}"
        required>
    </div>
    <div>
      <label
        for="order-type">
        Order type
      </label>
      <select
        id="order-type"
        class="form-select"
        aria-label="Default select example">
        <option
          selected>
          Select an Order Type
        </option>
        <option
          value="Phone">
          Phone
        </option>
        <option
          value="In-Person">
          In-Person
        </option>
        value="${obj.orderType || ''}"
      </select>
      
    </div>
    <button
      type="submit"
      class="btn btn-outline-dark">
      Create/edit order
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default createOrderForm;
