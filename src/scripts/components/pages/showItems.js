import { getItemsByOrder } from '../../api/itemData';
import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array, firebaseKey) => {
  clearDom();
  getItemsByOrder(firebaseKey).then((itemArray) => {
    let sum = 0;

    itemArray.forEach((item) => {
      sum += item.itemPrice;
    });

    if (array.length) {
      let domString = `
      <h1>Total $${sum}</h1>
    `;
      array.forEach((obj) => {
        domString += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${obj.itemName}</h5>
            <h6 class="card-price mb-2 text-muted">${obj.itemPrice}</h6>
            <hr>
            <i class="fas fa-edit btn btn-info" id="edit-item--${obj.firebaseKey}"></i>
            <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn--${obj.firebaseKey}"></i>
          </div>
        </div>
    `;
      });
      renderToDOM('#card-container', domString);
    }
  });
  const btnString = `
    <button id="add-item-btn" type="button" class="btn btn-primary btn-lg">Add Item</button>
    <button id="checkout" type="button" class="btn btn-secondary btn-lg">Checkout</button>
  `;
  renderToDOM('#view', btnString);
};

export { showItems, emptyItems };
