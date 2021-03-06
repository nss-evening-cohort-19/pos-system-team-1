import renderToDOM from '../../helpers/renderToDom';
import vinylImg from '../../../images/vinyl.gif';

const navBar = () => {
  const domString = `
    <nav
      class="navbar fixed-top navbar-expand-lg mb-5"
      style="box-shadow: 0px 2px 5px #777;background-color: white !important;"
      id="navBar">
      <div
        class="container-fluid"
        style="align-items: center;">
        <a
          class="navbar-brand title" href="#" id="navbarTitle"
          style="font-weight: bold;font-family: cursive; font-size: 28px;display: flex;align-items: center;">
          <img
               class="record" src=${vinylImg}
            style="height: 60px; width: 60px; margin-right: 8px;">
          Hip-Hop Pizza and Wangs
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            class="navbar-toggler-icon">
          </span>
        </button>
        <div
          class="collapse navbar-collapse"
          style="flex-grow: 0;"
          id="navbarText">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style="align-items: center;justify-items: center;">
            <li
              class="nav-item active">
              <a
                class="nav-link"
                href="#"
                style="background-color: #c3bebe;border: 1px solid #ced4da;border-radius: 8px;margin: 0px 10px;"
                id="viewOrders">
               View Orders
                <span
                  class="sr-only">
                  (current)
                </span>
              </a>
            </li>
            <li
              class="nav-item">
              <a
                class="nav-link"
                href="#"
                style="background-color: #c3bebe;border: 1px solid #ced4da;border-radius: 8px;margin: 0px 10px;"
                id="createOrder">
                Create An Order
              </a>
            </li>
            <form
              class="d-flex"
              style="margin: 0 5px;"
              role="search">
              <select
                class="form-select"
                style="width: 180px; height: 50px"
                id="searchOption"
                aria-label="Order filter options">
                <option
                  selected>
                  Select filter
                </option>
                <option
                  value="name">
                  Customer Name
                </option>
                <option
                  value="phone">
                  Customer Phone
                </option>
              </select>
              <input
                id="searchBar"
                class="form-control me-2"
                style="width: 180px; height: 50px"
                style="margin-right: 4px !important;"
                type="search"
                aria-label="Search">
              <button
                id = "searchBtn"
                class="btn btn-outline-secondary"
                type="submit">
                Search
              </button>
            </form>
            <li
              class="nav-item">
              <a
                class="nav-link"
                href="#"
                id="logout-button">
                Logout
              </a>
            </li>
          </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
