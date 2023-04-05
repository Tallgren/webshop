const cart = document.querySelector('.cart');
const cartDropdown = document.querySelector('.cart-dropdown');
const emptyBtn = document.querySelector('.empty-btn');
const checkoutBtn = document.querySelector('.checkout-btn');

//clear-btn
emptyBtn.addEventListener('click', function(event) {
  localStorage.clear();
  updateCart();
});

//checkout-btn
checkoutBtn.addEventListener('click', function(event) {
   open('order.html', '_self');
 });

//cart-dropdown
cart.addEventListener('click', (event) => {
   if (event.target.closest('.cart-icon')) {
      cartDropdown.classList.toggle('active');
   }
});

updateCart();

function updateCart() {
   const products = JSON.parse(localStorage.getItem('products')) || [];
   const cartItems = document.querySelector('.cart-items');
   const cartTotal = document.querySelector('.cart-total');
   let total = 0;
 
   cartItems.innerHTML = '';
   
   products.forEach(product => {
     cartItems.innerHTML += `
       <li class="center-align">
         <h5 class="cart-item-title">${product.title}</h5>
         <img src="${product.image}" class="d-block user-select-none cart-img" alt="product"></img>
         <div class="amount">
           <button class="minus" id="${product.id}">-</button>
           <input type="text" value="${product.amount}" disabled>
           <button class="plus" id="${product.id}">+</button>
         </div>
         <div class="sum">Summa: $${(product.price * product.amount).toFixed(2)}
         <button class="remove-btn" id="${product.id}">X</button>
         </div>
         <hr>   
       </li>
     `;
     total += product.price * product.amount;
   });
   
   cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
 
   const minusButtons = document.querySelectorAll('.minus');
   minusButtons.forEach(button => button.addEventListener('click', minusFunc));
   
   const plusButtons = document.querySelectorAll('.plus');
   plusButtons.forEach(button => button.addEventListener('click', plusFunc));

   const removeButtons = document.querySelectorAll('.remove-btn');
   removeButtons.forEach(button => button.addEventListener('click', function() {
      removeFunc(button.id);
   }));
 }

 function minusFunc() {
   var $input = $(this).parent().find('input');
   var count = parseInt($input.val()) - 1;
   if(count < 1) {
      removeFunc(this.id);
   }

   $input.val(count);
   const products = JSON.parse(localStorage.getItem('products'));
   products.forEach(product => {
      if(product.id == this.id) {
         product.amount --;
      }
   });
   localStorage.setItem('products', JSON.stringify(products));
   updateCart();
   return false;
}

function plusFunc() {
   var $input = $(this).parent().find('input');
   var count = parseInt($input.val());
   count++;
   $input.val(count);
   $input.change();
   
   const products = JSON.parse(localStorage.getItem('products'));
   products.forEach(product => {
      if(product.id == this.id) {
         product.amount ++;
      }
   });
   localStorage.setItem('products', JSON.stringify(products));
   updateCart();
   return false;
};

function removeFunc(id) {
   const products = JSON.parse(localStorage.getItem('products'));
   const index = products.findIndex(product => product.id == id);
   products.splice(index, 1);
   localStorage.setItem('products', JSON.stringify(products));

   updateCart();
}