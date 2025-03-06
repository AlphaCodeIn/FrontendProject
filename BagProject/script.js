document.addEventListener("DOMContentLoaded", function () {
  let bag = JSON.parse(localStorage.getItem("bagDetails"));

  if (bag) {
    document.getElementById("bag-img").src = bag.imgSrc;
    document.getElementById("bag-name").innerText = bag.name;
    document.getElementById("bag-description").innerText = bag.description;
    document.getElementById("bag-price").innerText = bag.price;

    let longDescElement = document.getElementById("bag-long-description");
    if (bag.longDescription) {
      longDescElement.innerText = bag.longDescription;
      longDescElement.style.display = "block"; 
    } else {
      longDescElement.style.display = "none";
    }

    showRelatedBags(bag.name);
  }

  updateCartCount();
});

function addToCart() {
  let bag = JSON.parse(localStorage.getItem("bagDetails"));

  if (!bag) {
    alert("Error: No bag details found!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if bag is already in cart
  let exists = cart.some((item) => item.name === bag.name);
  if (exists) {
    alert("This bag is already in your cart!");
    return;
  }

  cart.push(bag);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("Bag added to cart!");
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

// Hardcoded bags array for related products
const bags = [
  {
    name: "Leather Bag",
    description: "Premium leather bag.",
    longDescription:
      "Crafted from high-quality genuine leather, this bag is perfect for professionals and travelers.",
    price: 1500,
    imgSrc: "./img/leather.jpg",
  },
  {
    name: "Backpack",
    description: "Stylish backpack.",
    longDescription:
      "Spacious and durable, this backpack is ideal for school, college, or travel.",
    price: 1200,
    imgSrc: "./img/backpack.jpg",
  },
  {
    name: "Tote Bag",
    description: "Fashionable tote bag.",
    longDescription: "A trendy and practical tote bag for daily use.",
    price: 800,
    imgSrc: "./img/tote.jpg",
  },
  {
    name: "Messenger Bag",
    description: "Elegant messenger bag.",
    longDescription:
      "This stylish messenger bag is perfect for office and casual use.",
    price: 1700,
    imgSrc: "./img/messenger.jpg",
  },
  {
    name: "Laptop Bag",
    description: "Protective laptop bag.",
    longDescription:
      "Keep your laptop safe with this premium protective laptop bag.",
    price: 2000,
    imgSrc: "./img/laptop.jpg",
  },
];

function showRelatedBags(selectedBag) {
  let relatedBags = document.getElementById("related-bags");
  relatedBags.innerHTML = "";

  let filteredBags = bags.filter((bag) => bag.name !== selectedBag);
  filteredBags.sort(() => Math.random() - 0.5);
  let randomBags = filteredBags.slice(0, 3);

  randomBags.forEach((bag) => {
    let bagDiv = document.createElement("div");
    bagDiv.classList.add("bag");
    bagDiv.innerHTML = `
            <img src="${bag.imgSrc}" alt="${bag.name}">
            <p>${bag.name} - ₹${bag.price}</p>
        `;
    bagDiv.onclick = function () {
      goToDetails(bag.name, bag.description, bag.price, bag.imgSrc); // Long description pass nahi kar rahe
    };
    relatedBags.appendChild(bagDiv);
  });
}

function goToDetails(name, description, price, imgSrc, longDescription) {
  let bagDetails = { name, description, price, imgSrc, longDescription }; // ✅ `longDescription` bhi save ho rahi hai
  localStorage.setItem("bagDetails", JSON.stringify(bagDetails));
  location.reload();
}
