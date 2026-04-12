// Cart Functionality for Order Page
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price, image) {
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
      image: image
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function updateQuantity(name, change) {
  const item = cart.find(item => item.name === name);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(name);
    } else {
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
    }
  }
}

function clearCart() {
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function checkout() {
  if (cart.length > 0) {
    alert(`Order placed successfully! Total: ₹${getTotalPrice()}.\nThank you for your order!`);
    clearCart();
  }
}

function getTotalPrice() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const totalPriceEl = document.getElementById('totalPrice');
  
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h5>Your cart is empty</h5>
        <p>Add items to get started</p>
      </div>
    `;
    cartTotalEl.style.display = 'none';
    return;
  }
  
  cartTotalEl.style.display = 'block';
  
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      <div class="cart-details">
        <h6>${item.name}</h6>
        <div class="d-flex align-items-center">
          <span>₹${item.price}</span>
          <div class="quantity-controls ms-auto">
            <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">−</button>
            <span class="quantity">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
          </div>
        </div>
      </div>
      <button class="btn-close ms-2" onclick="removeFromCart('${item.name}')">&times;</button>
    </div>
  `).join('');
  
  totalPriceEl.textContent = `₹${getTotalPrice()}`;
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', updateCartUI);
