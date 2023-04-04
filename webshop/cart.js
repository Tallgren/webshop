const cart = document.querySelector('.cart');
const cartDropdown = document.querySelector('.cart-dropdown');

cart.addEventListener('click', () => {
   cartDropdown.classList.toggle('active');
});

function updateCart() {
   const cartItems = document.querySelector('.cart-items');
   const cartTotal = document.querySelector('.cart-total');
   let total = 0;
   // Add code to update cart items and total
   // Example: cartItems.innerHTML = '<li>Product 1</li><li>Product 2</li>';
   // Example: total += 100;
   cartTotal.innerHTML = `Total: $${total}`;
}