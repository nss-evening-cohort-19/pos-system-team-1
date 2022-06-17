import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add An Item</button>';

  renderToDOM('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((obj) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.itemName}</h5>
        <h6 class="card-price mb-2 text-muted">${obj.price}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-item-btn--${obj.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="edit-item--${obj.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn--${obj.firebaseKey}"></i>
      </div>
    </div>
    `;
    });
    renderToDOM('#store', domString);
  } else {
    emptyItems();
  }
};

export { showItems, emptyItems };
