const urlAPI = 'https://fakestoreapi.com/products/';

fetch(urlAPI)
  .then(resp => resp.json())
  .then(data => productRender(data))
  .catch(err => console.error(err));

function productRender(data) {
  let output = "";

  data.forEach(product => {
    output += `
            <div class="col">
              <div class="card shadow-sm">
                <img class="card-img-products" src="${product.image}"
                  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title><br>
                  <p class="center-align"> ${product.title}</p>
                <div class="card-body">
                  <p class="card-text">${product.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button id="order" product="${product.id}" type="button" class="btn btn-sm btn-outline-secondary order-btn">Order</button>
                    </div>
                    <div>$ ${product.price} </div>
                  </div>
                </div>
              </div>
            </div>
          `;
  });

  document.getElementById("productPage").innerHTML = output;

  const orderButtons = Array.from(document.querySelectorAll('.order-btn'));

  orderButtons.forEach(button => {
    button.addEventListener('click', function () {
      console.log(button)

      fetch(urlAPI + this.getAttribute('product'))
        .then(res => res.json())
        .then(json => saveProduct(json))
        .catch(err => console.error(err));

    });
  });
}

function saveProduct(data) {
  console.log(data);
  let products = JSON.parse(localStorage.getItem('products')) || [];
  // Check if product already exists in local storage
  let existingProductIndex = products.findIndex(product => product.id === data.id);
  if (existingProductIndex !== -1) {
    // If product exists, increase the amount-value
    products[existingProductIndex]['amount'] ++;
  } else {
    // If product doesn't exist, add it to the array and add amount attribute
    data.amount = 1;
    products.push(data);
  }
  // Update local storage
  localStorage.setItem('products', JSON.stringify(products));
  updateCart();
}
