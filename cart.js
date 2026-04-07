// Cart Management System
let cart = JSON.parse(localStorage.getItem('restaurantCart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    initCart();
    attachCartEventListeners();
    updateCartDisplay();
});

// Initialize Cart
function initCart() {
    if (!localStorage.getItem('restaurantCart')) {
        localStorage.setItem('restaurantCart', JSON.stringify([]));
    }
}

// Update Cart Counter (Global)
function updateCartCounter() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Add to Cart
function addToCart(dishId, name, price, image) {
    const existingItem = cart.find(item => item.id === dishId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: dishId,
            name: name,
            price: parseFloat(price),
            image: image,
            quantity: 1
        });
    }
    
    localStorage.setItem('restaurantCart', JSON.stringify(cart));
    updateCartCounter();
    showToast(`${name} added to cart!`);
}

// Remove from Cart
function removeFromCart(dishId) {
    cart = cart.filter(item => item.id !== dishId);
    localStorage.setItem('restaurantCart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartCounter();
}

// Update Quantity
function updateQuantity(dishId, change) {
    const item = cart.find(item => item.id === dishId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(dishId);
        } else {
            localStorage.setItem('restaurantCart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartCounter();
        }
    }
}

// Get Cart Total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Update Cart Display (Cart Page)
function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItemsContainer');
    const cartTotalElement = document.getElementById('cartTotal');
    const emptyCartMsg = document.getElementById('emptyCartMsg');
    
    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = '';
            if (emptyCartMsg) emptyCartMsg.style.display = 'block';
            if (cartTotalElement) cartTotalElement.textContent = '$0.00';
            return;
        }
        
        if (emptyCartMsg) emptyCartMsg.style.display = 'none';
        
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" class="rounded me-3" style="width: 80px; height: 80px; object-fit: cover;">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <p class="mb-2 text-muted">$${item.price.toFixed(2)}</p>
                </div>
                <div class="quantity-controls d-flex align-items-center me-3">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <div class="text-end">
                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                    <br><small>
                        <a href="#" class="text-danger" onclick="removeFromCart('${item.id}')">
                            <i class="fas fa-trash"></i> Remove
                        </a>
                    </small>
                </div>
            </div>
        `).join('');
        
        if (cartTotalElement) {
            cartTotalElement.textContent = `$${getCartTotal()}`;
        }
    }
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('addToCartToast');
    if (toast) {
        const toastBody = toast.querySelector('.toast-body');
        toastBody.textContent = message;
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();
    }
}

// Clear Cart
function clearCart() {
    if (confirm('Are you sure you want to clear the entire cart?')) {
        cart = [];
        localStorage.setItem('restaurantCart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartCounter();
        showToast('Cart cleared!');
    }
}

// Checkout Simulation
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = getCartTotal();
    const customerName = prompt('Enter your name for the order:');
    
    if (customerName) {
        alert(`Thank you, ${customerName}! Your order of $${total} has been placed successfully. We'll prepare it right away!`);
        clearCart();
        window.location.href = 'index.html';
    }
}

// Event Listeners
function attachCartEventListeners() {
    // Cart page specific listeners
    document.addEventListener('click', function(e) {
        if (e.target.matches('.cart-clear-btn')) {
            clearCart();
        } else if (e.target.matches('.checkout-btn')) {
            checkout();
        }
    });
}

// Make functions globally accessible
window.CartManager = {
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    updateCartDisplay,
    clearCart,
    checkout,
    updateCartCounter
};