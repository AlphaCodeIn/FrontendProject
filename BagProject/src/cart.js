function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-container");
    let totalPrice = 0;
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty!</p>";
      document.getElementById("buy-button").style.display = "none";
      return;
    }
  
    cartContainer.innerHTML = ""; 
    cart.forEach((item, index) => {
      totalPrice += item.price;
      let div = document.createElement("div");
      div.classList.add("bag");
      div.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.name}">
        <p>${item.name} - ₹${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartContainer.appendChild(div);
    });
  
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("buy-button").style.display = "block";
  }
  
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  }
  
  function buyNow() {
    let celebrationContainer = document.getElementById("celebration-container");
  
    if (document.getElementById("cart-title")) {
      document.getElementById("cart-title").style.display = "none";
    }
    if (document.getElementById("cart-container")) {
      document.getElementById("cart-container").style.display = "none";
    }
    if (document.getElementById("total-price-container")) {
      document.getElementById("total-price-container").style.display = "none";
    }
    if (document.getElementById("buy-button")) {
      document.getElementById("buy-button").style.display = "none";
    }
  
    celebrationContainer.style.display = "block";
    createConfetti();
  }
  
  function resetCart() {
    localStorage.removeItem("cart");
    location.reload();
  }
  
  function createConfetti() {
    for (let i = 0; i < 50; i++) {
      let confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor = ["red", "blue", "green", "yellow", "purple", "orange"][Math.floor(Math.random() * 6)];
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(confetti);
  
      setTimeout(() => confetti.remove(), 5000);
    }
  }
  
  loadCart();
  