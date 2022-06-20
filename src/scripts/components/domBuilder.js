import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="filter-container">
    </div>
    <div id="form-container"></div>
    <div id="card-container"></div>
    <div id="view">
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
