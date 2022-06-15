import renderToDOM from '../helpers/renderToDom';
import { logoutButton } from './buttons/logoutButton';

const navbar = () => {
  const domString = '<div id=logoutBtn></div>';
  renderToDOM('#navigation', domString);
  logoutButton();
};

export default navbar;
