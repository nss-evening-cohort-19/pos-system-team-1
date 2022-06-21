import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const reviewOrder = () => {
  clearDom();
  const domString = `
    <div class= "orderRev">
      <div>
        <h1>Review Order</h1>
        <h2>Total Revenue</h2>
      </div>
      <div>
        <p>Date Range:<p>
        <p>Sample range</p>
        <ul class="rev-list">
          <li>Total Tips:</li>
          <li>Total Call-Ins:</li>
          <li>Total Walk-Ins</li>
        </ul>
        <p>Date Range:<p>
        <p>Sample range</p>
      </div>
    </div>
  `;
  renderToDOM('#view', domString);
};

export default reviewOrder;
