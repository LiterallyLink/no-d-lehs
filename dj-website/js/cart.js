// Shopping Cart Functionality
const products = [
    { id: 1, name: 'DJ T-Shirt', price: 25, image: 'SHIRT', category: 'Apparel', description: 'Premium quality DJ branded t-shirt' },
    { id: 2, name: 'DJ Hat', price: 20, image: 'HAT', category: 'Apparel', description: 'Stylish DJ logo snapback hat' },
    { id: 3, name: 'Custom Playlist', price: 50, image: 'MUSIC', category: 'Digital', description: 'Professionally curated custom playlist' },
    { id: 4, name: 'Event Planning Guide', price: 15, image: 'GUIDE', category: 'Digital', description: 'Complete event planning handbook' },
    { id: 5, name: 'DJ Sticker Pack', price: 10, image: 'STICKERS', category: 'Accessories', description: 'Set of premium vinyl stickers' },
    { id: 6, name: 'Gift Certificate', price: 100, image: 'GIFT', category: 'Services', description: '$100 towards any DJ service' }
];

let cart = JSON.parse(localStorage.getItem('djCart')) || [];

// Initialize store
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('productGrid');

    if (productGrid) {
        renderProducts();
    }

    updateCartUI();
    setupCartListeners();
});

// Render products on store page
function renderProducts() {
    const productGrid = document.getElementById('productGrid');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-gradient" style="width: 100%;" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();

    // Show cart sidebar briefly
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.add('open');
        setTimeout(() => {
            if (!cartSidebar.matches(':hover')) {
                cartSidebar.classList.remove('open');
            }
        }, 2000);
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('djCart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 2rem;">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.image}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span style="padding: 0 1rem;">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="btn" style="margin-left: auto; padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) {
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Setup cart listeners
function setupCartListeners() {
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClose = document.getElementById('cartClose');

    if (cartBtn && cartSidebar) {
        cartBtn.addEventListener('click', function() {
            cartSidebar.classList.toggle('open');
        });
    }

    if (cartClose && cartSidebar) {
        cartClose.addEventListener('click', function() {
            cartSidebar.classList.remove('open');
        });
    }

    // Close cart when clicking outside
    document.addEventListener('click', function(event) {
        if (cartSidebar && cartSidebar.classList.contains('open')) {
            if (!event.target.closest('.cart-sidebar') && !event.target.closest('.cart-btn')) {
                cartSidebar.classList.remove('open');
            }
        }
    });
}
