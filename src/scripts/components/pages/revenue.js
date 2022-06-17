import renderToDOM from '../../helpers/renderToDom';

const renderRevenue = () => {
  const domString = `
    <div class= "rev">
      <div>
        <h1>Revenue</h1>
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
  renderToDOM('#main-container', domString);
};

export default renderRevenue;
