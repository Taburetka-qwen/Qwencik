/**
 * Cart Module
 * Handles shopping cart functionality with LocalStorage persistence
 */

// Cart state
let cart = [];
let favorites = [];

// DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesCountEl = document.getElementById('favoritesCount');

/**
 * Initialize cart from LocalStorage
 */
function initCart() {
    const savedCart = localStorage.getItem('techstore_cart');
    const savedFavorites = localStorage.getItem('techstore_favorites');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
    
    updateCartDisplay();
    updateFavoritesDisplay();
}

/**
 * Save cart to LocalStorage
 */
function saveCart() {
    localStorage.setItem('techstore_cart', JSON.stringify(cart));
}

/**
 * Save favorites to LocalStorage
 */
function saveFavorites() {
    localStorage.setItem('techstore_favorites', JSON.stringify(favorites));
}

/**
 * Add item to cart
 * @param {Object} product - Product object
 * @param {number} quantity - Quantity to add
 */
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartDisplay();
    showToast(`"${product.name}" добавлен в корзину`, 'success');
}

/**
 * Remove item from cart
 * @param {number} productId - Product ID to remove
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

/**
 * Update item quantity
 * @param {number} productId - Product ID
 * @param {number} change - Quantity change (+1 or -1)
 */
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        
        saveCart();
        updateCartDisplay();
    }
}

/**
 * Clear entire cart
 */
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    showToast('Корзина очищена', 'warning');
}

/**
 * Get total cart items count
 * @returns {number} Total items count
 */
function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Get total cart price
 * @returns {number} Total price
 */
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Update cart display
 */
function updateCartDisplay() {
    // Update badge count
    const count = getCartCount();
    cartCountEl.textContent = count;
    cartCountEl.style.display = count > 0 ? 'flex' : 'none';
    
    // Update items container
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartEmpty.classList.add('active');
        cartTotalEl.textContent = '0 ₽';
    } else {
        cartEmpty.classList.remove('active');
        renderCartItems();
        cartTotalEl.textContent = formatPrice(getCartTotal());
    }
}

/**
 * Render cart items HTML
 */
function renderCartItems() {
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Удалить</button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Toggle favorites status
 * @param {number} productId - Product ID
 */
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Удалено из избранного', 'warning');
    } else {
        favorites.push(productId);
        showToast('Добавлено в избранное', 'success');
    }
    
    saveFavorites();
    updateFavoritesDisplay();
    
    // Update button state if visible
    const btn = document.querySelector(`[data-favorite-btn="${productId}"]`);
    if (btn) {
        btn.classList.toggle('active');
    }
}

/**
 * Check if product is in favorites
 * @param {number} productId - Product ID
 * @returns {boolean} Is favorite
 */
function isFavorite(productId) {
    return favorites.includes(productId);
}

/**
 * Update favorites display
 */
function updateFavoritesDisplay() {
    favoritesCountEl.textContent = favorites.length;
    favoritesCountEl.style.display = favorites.length > 0 ? 'flex' : 'none';
}

/**
 * Open cart sidebar
 */
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close cart sidebar
 */
function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Show toast notification
 * @param {string} message - Message text
 * @param {string} type - Type (success, error, warning)
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Format price helper
 * @param {number} price - Price value
 * @returns {string} Formatted price
 */
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}

// Event Listeners
if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
}

if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
}

if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
}

if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите очистить корзину?')) {
            clearCart();
        }
    });
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Корзина пуста', 'error');
            return;
        }
        
        const total = getCartTotal();
        alert(`Заказ оформлен!\nСумма: ${formatPrice(total)}\n\nМенеджер свяжется с вами в ближайшее время.`);
        clearCart();
        closeCart();
    });
}

if (favoritesBtn) {
    favoritesBtn.addEventListener('click', () => {
        if (favorites.length === 0) {
            showToast('Избранное пусто', 'warning');
        } else {
            showToast(`В избранном ${favorites.length} товаров`, 'success');
        }
    });
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
        closeCart();
    }
});

// Export functions
window.CartModule = {
    initCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleFavorite,
    isFavorite,
    getCartCount,
    getCartTotal,
    showToast,
    openCart,
    closeCart
};
