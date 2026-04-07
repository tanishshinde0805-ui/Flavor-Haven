// Menu Management System
document.addEventListener('DOMContentLoaded', function() {
    initMenuPage();
    attachMenuEventListeners();
});

// Menu Data Structure
const menuCategories = {
    'veg-starters': {
        title: 'Vegetarian Starters',
        dishes: [
            { id: 'v1', name: 'Paneer Tikka', price: 15.99, image: 'https://images.unsplash.com/photo-1579586140626-5984b9dc23d6?w=400&h=300&fit=crop', desc: 'Smoked cottage cheese cubes marinated with aromatic spices' },
            { id: 'v2', name: 'Veg Pakora', price: 9.99, image: 'https://images.unsplash.com/photo-1621996346565-e3adc652b678?w=400&h=300&fit=crop', desc: 'Crispy mixed vegetable fritters served with mint chutney' },
            { id: 'v3', name: 'Aloo Tikki', price: 8.99, image: 'https://images.unsplash.com/photo-1603048297194-8f7d9e7f8a0f?w=400&h=300&fit=crop', desc: 'Spiced potato patties served with tangy tamarind sauce' },
            { id: 'v4', name: 'Hara Bhara Kebab', price: 12.99, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', desc: 'Green vegetable patties with spinach and peas' }
        ]
    },
    'non-veg-starters': {
        title: 'Non-Vegetarian Starters',
        dishes: [
            { id: 'nv1', name: 'Chicken Tikka', price: 18.99, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', desc: 'Juicy chicken pieces marinated in yogurt and spices' },
            { id: 'nv2', name: 'Fish Tikka', price: 22.99, image: 'https://images.unsplash.com/photo-1606890658317-7d4e67e8c69b?w=400&h=300&fit=crop', desc: 'Boneless fish marinated with coastal spices' },
            { id: 'nv3', name: 'Chicken 65', price: 16.99, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop', desc: 'Spicy South Indian style fried chicken' },
            { id: 'nv4', name: 'Prawn Fry', price: 24.99, image: 'https://images.unsplash.com/photo-1603488451188-a3a309ae3d5f?w=400&h=300&fit=crop', desc: 'Crispy fried prawns with Kerala spices' }
        ]
    },
    'main-course': {
        title: 'Main Course',
        dishes: [
            { id: 'mc1', name: 'Butter Chicken', price: 18.99, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', desc: 'Creamy tomato-based curry with tender chicken' },
            { id: 'mc2', name: 'Dal Makhani', price: 14.99, image: 'https://images.unsplash.com/photo-1604464569978-3ccd0b4f1c0e?w=400&h=300&fit=crop', desc: 'Slow-cooked black lentils with butter and cream' },
            { id: 'mc3', name: 'Biryani', price: 19.99, image: 'https://images.unsplash.com/photo-1603383942351-71074e9e7b1e?w=400&h=300&fit=crop', desc: 'Aromatic basmati rice with chicken and saffron' },
            { id: 'mc4', name: 'Rogan Josh', price: 20.99, image: 'https://images.unsplash.com/photo-1615484478152-2c56d1d2e9d5?w=400&h=300&fit=crop', desc: 'Kashmiri lamb curry with yogurt and spices' }
        ]
    },
    'italian-fusion': {
        title: 'Italian & Fusion',
        dishes: [
            { id: 'if1', name: 'Margherita Pizza', price: 16.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d174?w=400&h=300&fit=crop', desc: 'Classic pizza with fresh mozzarella and basil' },
            { id: 'if2', name: 'Pasta Alfredo', price: 17.99, image: 'https://images.unsplash.com/photo-1585238342021-86d5a192e4a5?w=400&h=300&fit=crop', desc: 'Creamy fettuccine with parmesan and garlic' },
            { id: 'if3', name: 'Chicken Lasagna', price: 19.99, image: 'https://images.unsplash.com/photo-1621996346565-e3adc652b678?w=400&h=300&fit=crop', desc: 'Layered pasta with chicken and cheese sauce' },
            { id: 'if4', name: 'Tandoori Pizza', price: 18.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d174?w=400&h=300&fit=crop', desc: 'Indian fusion pizza with tandoori chicken' }
        ]
    },
    'desserts': {
        title: 'Desserts',
        dishes: [
            { id: 'd1', name: 'Gulab Jamun', price: 8.99, image: 'https://images.unsplash.com/photo-1542994983-9debd7e9aa5f?w=400&h=300&fit=crop', desc: 'Warm milk dumplings soaked in rose syrup' },
            { id: 'd2', name: 'Rasmalai', price: 9.99, image: 'https://images.unsplash.com/photo-1615484478152-2c56d1d2e9d5?w=400&h=300&fit=crop', desc: 'Soft cheese balls in thickened sweetened milk' },
            { id: 'd3', name: 'Tiramisu', price: 9.99, image: 'https://images.unsplash.com/photo-1542994983-9debd7e9aa5f?w=400&h=300&fit=crop', desc: 'Classic Italian coffee-flavored dessert' },
            { id: 'd4', name: 'Kulfi', price: 7.99, image: 'https://images.unsplash.com/photo-1604464569978-3ccd0b4f1c0e?w=400&h=300&fit=crop', desc: 'Traditional Indian ice cream with pistachios' }
        ]
    },
    'beverages': {
        title: 'Beverages',
        dishes: [
            { id: 'b1', name: 'Lassi Sweet', price: 5.99, image: 'https://images.unsplash.com/photo-1621996346565-e3adc652b678?w=400&h=300&fit=crop', desc: 'Creamy yogurt drink with cardamom and sugar' },
            { id: 'b2', name: 'Mango Lassi', price: 6.99, image: 'https://images.unsplash.com/photo-1604464569978-3ccd0b4f1c0e?w=400&h=300&fit=crop', desc: 'Refreshing mango and yogurt smoothie' },
            { id: 'b3', name: 'Masala Chai', price: 4.99, image: 'https://images.unsplash.com/photo-1615484478152-2c56d1d2e9d5?w=400&h=300&fit=crop', desc: 'Spiced Indian tea with milk and cardamom' },
            { id: 'b4', name: 'Fresh Lime Soda', price: 4.49, image: 'https://images.unsplash.com/photo-1621996346565-e3adc652b678?w=400&h=300&fit=crop', desc: 'Refreshing sparkling lime drink' }
        ]
    }
};

// Initialize Menu Page
function initMenuPage() {
    const categoryContainer = document.getElementById('menuCategories');
    if (categoryContainer) {
        categoryContainer.innerHTML = Object.entries(menuCategories).map(([key, category]) => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="menu-category-card h-100 text-center p-4">
                    <div class="category-icon mb-3">
                        <i class="fas fa-${getCategoryIcon(key)} fa-3x text-primary"></i>
                    </div>
                    <h3 class="mb-3">${category.title}</h3>
                    <p class="text-muted mb-4">${category.dishes.length} Delicious Items</p>
                    <a href="${key}.html" class="btn btn-primary btn-lg">View Menu →</a>
                </div>
            </div>
        `).join('');
    }
}

// Get Category Icon
function getCategoryIcon(category) {
    const icons = {
        'veg-starters': 'leaf',
        'non-veg-starters': 'drumstick-bite',
        'main-course': 'utensils',
        'italian-fusion': 'pizza-slice',
        'desserts': 'ice-cream',
        'beverages': 'glass-whiskey'
    };
    return icons[category] || 'utensils';
}

// Category Page Dish Display
function displayCategoryDishes(categoryKey) {
    const dishes = menuCategories[categoryKey]?.dishes || [];
    const container = document.getElementById('dishesContainer');
    
    if (container) {
        container.innerHTML = dishes.map(dish => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="dish-card h-100">
                    <div class="dish-image">
                        <img src="${dish.image}" alt="${dish.name}" class="w-100">
                        <div class="dish-overlay">
                            <h5>${dish.name}</h5>
                            <p class="mb-0">${dish.desc}</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${dish.name}</h5>
                        <p class="card-text text-muted">${dish.desc}</p>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="price fs-4 fw-bold text-primary">$${dish.price.toFixed(2)}</span>
                        </div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateDishQuantity('${dish.id}', -1)">−</button>
                            <input type="number" class="quantity-input" id="qty-${dish.id}" value="1" min="1" max="10">
                            <button class="quantity-btn" onclick="updateDishQuantity('${dish.id}', 1)">+</button>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-primary w-100 me-2 mb-2" onclick="CartManager.addToCart('${dish.id}', '${dish.name}', ${dish.price}, '${dish.image}')">
                                <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                            </button>
                            <button class="btn btn-success w-100" onclick="orderNow('${dish.id}', '${dish.name}', ${dish.price})">
                                <i class="fas fa-bolt me-2"></i>Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Update Dish Quantity
function updateDishQuantity(dishId, change) {
    const input = document.getElementById(`qty-${dishId}`);
    if (input) {
        let qty = parseInt(input.value) || 1;
        qty = Math.max(1, Math.min(10, qty + change));
        input.value = qty;
    }
}

// Order Now (Direct Checkout)
function orderNow(dishId, name, price) {
    const qtyInput = document.getElementById(`qty-${dishId}`);
    const qty = parseInt(qtyInput?.value) || 1;
    
    if (confirm(`Order ${qty} x ${name} for $${(price * qty).toFixed(2)}?`)) {
        CartManager.addToCart(dishId, name, price, '');
        showToast(`Ordered ${qty} x ${name}!`);
        setTimeout(() => {
            window.location.href = 'cart.html';
        }, 1000);
    }
}

// Modal for Dish Details
function showDishModal(dish) {
    const modalTitle = document.getElementById('dishModalTitle');
    const modalImage = document.getElementById('dishModalImage');
    const modalDesc = document.getElementById('dishModalDesc');
    const modalPrice = document.getElementById('dishModalPrice');
    
    modalTitle.textContent = dish.name;
    modalImage.src = dish.image;
    modalDesc.textContent = dish.desc;
    modalPrice.textContent = `$${dish.price.toFixed(2)}`;
    
    const modal = new bootstrap.Modal(document.getElementById('dishModal'));
    modal.show();
}

// Event Listeners
function attachMenuEventListeners() {
    // Category page detection
    const currentPath = window.location.pathname.split('/').pop();
    if (currentPath && currentPath !== 'menu.html') {
        const categoryKey = currentPath.replace('.html', '');
        displayCategoryDishes(categoryKey);
    }
}

// Make functions global
window.MenuManager = {
    displayCategoryDishes,
    updateDishQuantity,
    orderNow,
    showDishModal,
    initMenuPage
};