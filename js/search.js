/**
 * Search Module
 * Handles product search functionality with real-time filtering
 */

// DOM Elements
const searchInput = document.getElementById('searchInput');
const productsGrid = document.getElementById('productsGrid');
const bestsellersGrid = document.getElementById('bestsellersGrid');
const newArrivalsGrid = document.getElementById('newArrivalsGrid');

let currentProducts = [];
let debounceTimer = null;

/**
 * Initialize search functionality
 */
function initSearch() {
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
    }
    
    // Load initial products
    loadProducts();
    loadBestsellers();
    loadNewArrivals();
}

/**
 * Handle search input with debouncing
 * @param {Event} e - Input event
 */
function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    // Clear previous timer
    clearTimeout(debounceTimer);
    
    // Debounce for 300ms
    debounceTimer = setTimeout(() => {
        if (query.length > 0) {
            performSearch(query);
        } else {
            // Show all products when search is cleared
            applyFiltersAndSort();
        }
    }, 300);
}

/**
 * Perform search
 * @param {string} query - Search query
 */
function performSearch(query) {
    const results = searchProducts(query);
    renderProducts(results, productsGrid);
    
    if (results.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="margin: 0 auto 1rem; opacity: 0.5;">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                </svg>
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить поисковый запрос</p>
            </div>
        `;
    }
}

/**
 * Load and render all products
 */
function loadProducts() {
    const products = getAllProducts();
    currentProducts = products;
    renderProducts(products, productsGrid);
}

/**
 * Load and render bestsellers
 */
function loadBestsellers() {
    if (bestsellersGrid) {
        const bestsellers = getBestsellers();
        renderProducts(bestsellers, bestsellersGrid);
    }
}

/**
 * Load and render new arrivals
 */
function loadNewArrivals() {
    if (newArrivalsGrid) {
        const newArrivals = getNewArrivals();
        renderProducts(newArrivals, newArrivalsGrid);
    }
}

/**
 * Render products to grid
 * @param {Array} products - Products array
 * @param {HTMLElement} container - Target container
 */
function renderProducts(products, container) {
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Add event listeners to new elements
    attachProductListeners(container);
}

/**
 * Create product card HTML
 * @param {Object} product - Product object
 * @returns {string} HTML string
 */
function createProductCard(product) {
    const { formatPrice, generateStars, categoryNames } = window.ProductsModule;
    const isFav = isFavorite(product.id);
    
    const badgesHTML = product.badges.map(badge => {
        const badgeClass = badge === 'new' ? 'badge-new' : badge === 'sale' ? 'badge-sale' : 'badge-top';
        const badgeText = badge === 'new' ? 'NEW' : badge === 'sale' ? `-${product.discount}%` : 'TOP';
        return `<span class="product-badge ${badgeClass}">${badgeText}</span>`;
    }).join('');
    
    const colorsHTML = product.colors.slice(0, 4).map(color => 
        `<span class="color-option" style="background-color: ${color};" title="${color}"></span>`
    ).join('');
    
    const stockHTML = product.inStock 
        ? '<span class="product-stock">✓ В наличии</span>'
        : '<span class="product-stock out-of-stock">✗ Нет в наличии</span>';
    
    return `
        <article class="product-card" data-id="${product.id}" data-category="${product.category}" data-brand="${product.brand}" data-price="${product.price}" data-rating="${product.rating}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">
                    ${badgesHTML}
                </div>
                <div class="product-actions">
                    <button class="product-action-btn" onclick="openProductModal(${product.id})" aria-label="Быстрый просмотр">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </button>
                    <button class="product-action-btn ${isFav ? 'active' : ''}" data-favorite-btn="${product.id}" onclick="toggleFavorite(${product.id})" aria-label="В избранное">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${categoryNames[product.category] || product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                    <span class="new-price">${formatPrice(product.price)}</span>
                    ${product.discount ? `<span class="discount-percent">-${product.discount}%</span>` : ''}
                </div>
                ${stockHTML}
                <div class="product-colors">
                    ${colorsHTML}
                </div>
                <div class="product-buttons">
                    <button class="btn btn-secondary" onclick="openProductModal(${product.id})">Подробнее</button>
                    <button class="btn btn-primary" onclick="addToCart({id: ${product.id}, name: '${product.name}', price: ${product.price}, image: '${product.image}'})" ${!product.inStock ? 'disabled' : ''}>
                        В корзину
                    </button>
                </div>
            </div>
        </article>
    `;
}

/**
 * Attach event listeners to product cards
 * @param {HTMLElement} container - Container element
 */
function attachProductListeners(container) {
    // Color options
    container.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * Apply filters and sorting
 */
function applyFiltersAndSort() {
    const filters = collectFilters();
    const sortBy = document.getElementById('sortSelect')?.value || 'default';
    
    let filtered = filterProducts(filters);
    filtered = sortProducts(filtered, sortBy);
    
    renderProducts(filtered, productsGrid);
}

/**
 * Collect active filters
 * @returns {Object} Filters object
 */
function collectFilters() {
    const filters = {};
    
    // Category filters
    const categories = Array.from(document.querySelectorAll('#categoryFilters input:checked'))
        .map(cb => cb.value);
    if (categories.length > 0) {
        filters.categories = categories;
    }
    
    // Brand filters
    const brands = Array.from(document.querySelectorAll('#brandFilters input:checked'))
        .map(cb => cb.value);
    if (brands.length > 0) {
        filters.brands = brands;
    }
    
    // Price filters
    const minPrice = document.getElementById('minPrice')?.value;
    const maxPrice = document.getElementById('maxPrice')?.value;
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;
    
    // Rating filter
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    if (rating && rating > 0) {
        filters.rating = rating;
    }
    
    // Stock filter
    const inStockOnly = document.getElementById('inStockOnly')?.checked;
    if (inStockOnly) {
        filters.inStockOnly = true;
    }
    
    return filters;
}

/**
 * Reset all filters
 */
function resetFilters() {
    // Reset checkboxes
    document.querySelectorAll('#categoryFilters input, #brandFilters input').forEach(cb => {
        cb.checked = false;
    });
    
    // Reset price inputs
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    if (minPrice) minPrice.value = '';
    if (maxPrice) maxPrice.value = '';
    
    // Reset rating
    const ratingDefault = document.querySelector('input[name="rating"][value="0"]');
    if (ratingDefault) ratingDefault.checked = true;
    
    // Reset stock filter
    const inStockOnly = document.getElementById('inStockOnly');
    if (inStockOnly) inStockOnly.checked = false;
    
    // Reset sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'default';
    
    // Reset search
    if (searchInput) searchInput.value = '';
    
    // Reload products
    loadProducts();
}

// Filter event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Category filters
    document.querySelectorAll('#categoryFilters input').forEach(cb => {
        cb.addEventListener('change', applyFiltersAndSort);
    });
    
    // Brand filters
    document.querySelectorAll('#brandFilters input').forEach(cb => {
        cb.addEventListener('change', applyFiltersAndSort);
    });
    
    // Price filters
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    if (minPrice) minPrice.addEventListener('input', applyFiltersAndSort);
    if (maxPrice) maxPrice.addEventListener('input', applyFiltersAndSort);
    
    // Rating filter
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.addEventListener('change', applyFiltersAndSort);
    });
    
    // Stock filter
    const inStockOnly = document.getElementById('inStockOnly');
    if (inStockOnly) inStockOnly.addEventListener('change', applyFiltersAndSort);
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.addEventListener('change', applyFiltersAndSort);
    
    // Reset filters button
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
});

// Export functions
window.SearchModule = {
    initSearch,
    loadProducts,
    loadBestsellers,
    loadNewArrivals,
    renderProducts,
    applyFiltersAndSort,
    resetFilters,
    performSearch
};
