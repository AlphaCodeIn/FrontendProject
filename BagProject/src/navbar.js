document.getElementById("navbar-container").innerHTML = `
  <nav>
    <div class="logo">👜 HN Bags</div>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="shop.html">🛍️ Shop</a></li>
      <li><a href="cart.html">🛒 Cart (<span id="cart-count">0</span>)</a></li>
    </ul>
  </nav>
`;

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.innerText = cart.length;
  }
}

updateCartCount();
