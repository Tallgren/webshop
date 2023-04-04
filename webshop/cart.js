const cart = document.querySelector('.cart');
const cartDropdown = document.querySelector('.cart-dropdown');

cart.addEventListener('click', (event) => {
   if (event.target.closest('.cart-icon')) {
      cartDropdown.classList.toggle('active');
   }
});

function updateCart() {
   const products = JSON.parse(localStorage.getItem('products')) || [];
   const cartItems = document.querySelector('.cart-items');
   const cartTotal = document.querySelector('.cart-total');
   let total = 0;
 
   cartItems.innerHTML = '';
   
   products.forEach(product => {
     cartItems.innerHTML += `
       <li>
         <img src="${product.image}" class="d-block user-select-none cart-img" alt="product">${product.title}</img>
         <div class="number">
           <button class="minus">-</button>
           <input type="text" value="1"/>
           <button class="plus">+</button>
         </div>
         <div>Summa: $${product.price}</div>
         <hr>   
       </li>
     `;
     total += product.price;
   });
   
   cartTotal.innerHTML = `Total: $${total}`;
 
   const minusButtons = document.querySelectorAll('.minus');
   minusButtons.forEach(button => button.addEventListener('click', minusFunc));
   
   const plusButtons = document.querySelectorAll('.plus');
   plusButtons.forEach(button => button.addEventListener('click', plusFunc));
 }
 


function minusFunc() {
   var $input = $(this).parent().find('input');
   var count = parseInt($input.val()) - 1;
   count = count < 1 ? 1 : count;
   $input.val(count);
   $input.change();
   return false;
}
function plusFunc() {
   var $input = $(this).parent().find('input');
   $input.val(parseInt($input.val()) + 1);
   $input.change();
   return false;
};