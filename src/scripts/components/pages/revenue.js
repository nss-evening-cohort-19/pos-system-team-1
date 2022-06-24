import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const renderRevenue = (revenueArray) => {
  let totalRevenue = 0;
  let totalTips = 0;

  if (revenueArray && revenueArray.length > 0) {
    revenueArray.forEach((revenue) => {
      totalRevenue += Number(revenue.orderTotal);
      totalTips += Number(revenue.tipAmount);
    });
  }

  clearDom();
  const domString = `
    <div class= "rev">
      <h1>Revenue</h1>
      <h2>Total Revenue: ${totalRevenue}</h2>
      <li>Total Tips: ${totalTips}</li>
    </div>
  `;
  renderToDOM('#view', domString);
};

export default renderRevenue;
