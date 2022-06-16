const clearDom = () => {
  document.querySelector('#filter-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
