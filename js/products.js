/**
 * Products Data Module
 * Contains all product data and related functions
 */

// Product database with 20+ items
const productsData = [
    // Laptops
    {
        id: 1,
        name: "MacBook Pro 16\" M3 Max",
        category: "laptops",
        brand: "Apple",
        price: 399990,
        oldPrice: 449990,
        rating: 4.9,
        reviews: 156,
        description: "Мощнейший ноутбук для профессионалов с чипом M3 Max, 36GB RAM и 1TB SSD",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f7fafc'/%3E%3Crect x='50' y='50' width='300' height='200' rx='10' fill='%23667eea' opacity='0.2'/%3E%3Crect x='80' y='80' width='240' height='140' rx='5' fill='%23667eea'/%3E%3C/svg%3E",
        colors: ["#spacegray", "#silver"],
        inStock: true,
        badges: ["new", "top"],
        discount: 11
    },
    {
        id: 2,
        name: "Dell XPS 15 OLED",
        category: "laptops",
        brand: "Dell",
        price: 189990,
        oldPrice: 219990,
        rating: 4.7,
        reviews: 89,
        description: "Премиальный ноутбук с OLED дисплеем 4K и процессором Intel Core i9",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23edf2f7'/%3E%3Crect x='60' y='60' width='280' height='180' rx='8' fill='%234a5568'/%3E%3C/svg%3E",
        colors: ["#silver", "#black"],
        inStock: true,
        badges: ["sale"],
        discount: 14
    },
    {
        id: 3,
        name: "ASUS ROG Zephyrus G16",
        category: "laptops",
        brand: "ASUS",
        price: 249990,
        oldPrice: 279990,
        rating: 4.8,
        reviews: 124,
        description: "Игровой ультрабук с RTX 4080 и компактным корпусом",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f7fafc'/%3E%3Crect x='50' y='50' width='300' height='200' rx='10' fill='%23764ba2' opacity='0.3'/%3E%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: ["top"],
        discount: 11
    },
    {
        id: 4,
        name: "HP Spectre x360 14",
        category: "laptops",
        brand: "HP",
        price: 159990,
        oldPrice: 179990,
        rating: 4.5,
        reviews: 67,
        description: "Универсальный трансформер с сенсорным экраном",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23edf2f7'/%3E%3Crect x='70' y='70' width='260' height='160' rx='6' fill='%23667eea'/%3E%3C/svg%3E",
        colors: ["#silver", "#gold"],
        inStock: true,
        badges: [],
        discount: 11
    },
    
    // Smartphones
    {
        id: 5,
        name: "iPhone 15 Pro Max",
        category: "smartphones",
        brand: "Apple",
        price: 159990,
        oldPrice: 179990,
        rating: 4.9,
        reviews: 342,
        description: "Флагман Apple с титановым корпусом и камерой 48MP",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f7fafc'/%3E%3Crect x='75' y='50' width='150' height='300' rx='20' fill='%234a5568'/%3E%3Ccircle cx='150' cy='100' r='30' fill='%232d3748'/%3E%3C/svg%3E",
        colors: ["#titanium", "#blue", "#white", "#black"],
        inStock: true,
        badges: ["new", "top"],
        discount: 11
    },
    {
        id: 6,
        name: "Samsung Galaxy S24 Ultra",
        category: "smartphones",
        brand: "Samsung",
        price: 139990,
        oldPrice: 159990,
        rating: 4.8,
        reviews: 287,
        description: "Топовый Android смартфон со встроенным стилусом S Pen",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23edf2f7'/%3E%3Crect x='75' y='50' width='150' height='300' rx='18' fill='%23667eea'/%3E%3C/svg%3E",
        colors: ["#gray", "#violet", "#yellow", "#black"],
        inStock: true,
        badges: ["sale"],
        discount: 13
    },
    {
        id: 7,
        name: "Xiaomi 14 Ultra",
        category: "smartphones",
        brand: "Xiaomi",
        price: 99990,
        oldPrice: 119990,
        rating: 4.6,
        reviews: 156,
        description: "Фотофлагман с оптикой Leica и Snapdragon 8 Gen 3",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f7fafc'/%3E%3Crect x='80' y='60' width='140' height='280' rx='15' fill='%23764ba2'/%3E%3C/svg%3E",
        colors: ["#black", "#white"],
        inStock: true,
        badges: [],
        discount: 17
    },
    {
        id: 8,
        name: "Google Pixel 8 Pro",
        category: "smartphones",
        brand: "LG",
        price: 89990,
        oldPrice: 99990,
        rating: 4.7,
        reviews: 198,
        description: "Чистый Android и лучшие AI-функции от Google",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23edf2f7'/%3E%3Crect x='85' y='70' width='130' height='260' rx='12' fill='%2348bb78'/%3E%3C/svg%3E",
        colors: ["#obsidian", "#porcelain", "#bay"],
        inStock: false,
        badges: [],
        discount: 10
    },
    
    // Monitors
    {
        id: 9,
        name: "LG UltraGear 27\" 4K",
        category: "monitors",
        brand: "LG",
        price: 54990,
        oldPrice: 64990,
        rating: 4.6,
        reviews: 234,
        description: "Игровой монитор 4K 144Hz с поддержкой G-Sync",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f7fafc'/%3E%3Crect x='50' y='40' width='300' height='200' rx='5' fill='%232d3748'/%3E%3Crect x='170' y='240' width='60' height='40' fill='%234a5568'/%3E%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: ["sale"],
        discount: 15
    },
    {
        id: 10,
        name: "Samsung Odyssey G9 49\"",
        category: "monitors",
        brand: "Samsung",
        price: 129990,
        oldPrice: 149990,
        rating: 4.8,
        reviews: 167,
        description: "Сверхширокий изогнутый монитор для максимального погружения",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250'%3E%3Crect width='500' height='250' fill='%23edf2f7'/%3E%3Cpath d='M50,50 Q250,100 450,50 L450,200 Q250,150 50,200 Z' fill='%23667eea'/%3E%3C/svg%3E",
        colors: ["#white", "#black"],
        inStock: true,
        badges: ["top"],
        discount: 13
    },
    {
        id: 11,
        name: "ASUS ProArt Display 32\"",
        category: "monitors",
        brand: "ASUS",
        price: 89990,
        oldPrice: 99990,
        rating: 4.7,
        reviews: 89,
        description: "Профессиональный монитор для дизайнеров с калибровкой",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f7fafc'/%3E%3Crect x='40' y='30' width='320' height='220' rx='3' fill='%234a5568'/%3E%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: [],
        discount: 10
    },
    
    // Gaming
    {
        id: 12,
        name: "PlayStation 5 Slim",
        category: "gaming",
        brand: "Sony",
        price: 54990,
        oldPrice: 59990,
        rating: 4.9,
        reviews: 512,
        description: "Игровая консоль нового поколения с эксклюзивными играми",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23edf2f7'/%3E%3Crect x='100' y='50' width='100' height='300' rx='10' fill='%23fff' stroke='%232d3748' stroke-width='2'/%3E%3C/svg%3E",
        colors: ["#white"],
        inStock: true,
        badges: ["top"],
        discount: 8
    },
    {
        id: 13,
        name: "Xbox Series X",
        category: "gaming",
        brand: "Microsoft",
        price: 49990,
        oldPrice: 54990,
        rating: 4.7,
        reviews: 389,
        description: "Мощная консоль от Microsoft с Game Pass",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f7fafc'/%3E%3Crect x='110' y='60' width='80' height='280' rx='5' fill='%232d3748'/%3E%3Ccircle cx='150' cy='150' r='20' fill='%2348bb78'/%3E%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: [],
        discount: 9
    },
    {
        id: 14,
        name: "Logitech G Pro X Superlight",
        category: "gaming",
        brand: "Logitech",
        price: 14990,
        oldPrice: 17990,
        rating: 4.8,
        reviews: 445,
        description: "Легчайшая игровая мышь для киберспорта",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23edf2f7'/%3E%3Cellipse cx='150' cy='100' rx='60' ry='40' fill='%234a5568'/%3E%3C/svg%3E",
        colors: ["#white", "#black", "#pink"],
        inStock: true,
        badges: ["sale"],
        discount: 17
    },
    {
        id: 15,
        name: "Razer BlackWidow V4",
        category: "gaming",
        brand: "Razer",
        price: 16990,
        oldPrice: 19990,
        rating: 4.6,
        reviews: 278,
        description: "Механическая клавиатура с RGB подсветкой",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 150'%3E%3Crect width='400' height='150' fill='%23f7fafc'/%3E%3Crect x='50' y='30' width='300' height='90' rx='5' fill='%232d3748'/%3E%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: [],
        discount: 15
    },
    
    // Headphones
    {
        id: 16,
        name: "AirPods Max",
        category: "headphones",
        brand: "Apple",
        price: 54990,
        oldPrice: 62990,
        rating: 4.7,
        reviews: 356,
        description: "Премиальные наушники с активным шумоподавлением",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23edf2f7'/%3E%3Cpath d='M75,150 Q75,50 150,50 Q225,50 225,150' stroke='%23667eea' stroke-width='20' fill='none'/%3E%3Ccircle cx='75' cy='150' r='40' fill='%23667eea'/%3E%3Ccircle cx='225' cy='150' r='40' fill='%23667eea'/%3E%3C/svg%3E",
        colors: ["#silver", "#spacegray", "#blue", "#pink", "#green"],
        inStock: true,
        badges: [],
        discount: 13
    },
    {
        id: 17,
        name: "Sony WH-1000XM5",
        category: "headphones",
        brand: "Sony",
        price: 34990,
        oldPrice: 39990,
        rating: 4.9,
        reviews: 523,
        description: "Лучшие беспроводные наушники по версии экспертов",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f7fafc'/%3E%3Cpath d='M80,150 Q80,60 150,60 Q220,60 220,150' stroke='%232d3748' stroke-width='18' fill='none'/%3E%3Ccircle cx='80' cy='150' r='35' fill='%232d3748'/%3E%3Ccircle cx='220' cy='150' r='35' fill='%232d3748'/%3E%3C/svg%3E",
        colors: ["#black", "#silver"],
        inStock: true,
        badges: ["top", "sale"],
        discount: 13
    },
    {
        id: 18,
        name: "Samsung Galaxy Buds2 Pro",
        category: "headphones",
        brand: "Samsung",
        price: 14990,
        oldPrice: 19990,
        rating: 4.5,
        reviews: 289,
        description: "Компактные TWS наушники с Hi-Fi звуком",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23edf2f7'/%3E%3Ccircle cx='120' cy='100' r='25' fill='%23764ba2'/%3E%3Ccircle cx='180' cy='100' r='25' fill='%23764ba2'/%3E%3C/svg%3E",
        colors: ["#purple", "#white", "#black"],
        inStock: true,
        badges: ["sale"],
        discount: 25
    },
    
    // Components
    {
        id: 19,
        name: "NVIDIA GeForce RTX 4090",
        category: "components",
        brand: "NVIDIA",
        price: 179990,
        oldPrice: 199990,
        rating: 4.9,
        reviews: 167,
        description: "Флагманская видеокарта для игр и работы с AI",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f7fafc'/%3E%3Crect x='50' y='40' width='300' height='120' rx='5' fill='%232d3748'/%3E%3Ccircle cx='120' cy='100' r='30' fill='%2348bb78'/%3E%3Ccircle cx='200' cy='100' r='30' fill='%2348bb78'/%3E%3Ccircle cx='280' cy='100' r='30' fill='%2348bb78'/%3E%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: ["top"],
        discount: 10
    },
    {
        id: 20,
        name: "AMD Ryzen 9 7950X3D",
        category: "components",
        brand: "AMD",
        price: 59990,
        oldPrice: 69990,
        rating: 4.8,
        reviews: 234,
        description: "Топовый процессор для игр с 3D V-Cache",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23edf2f7'/%3E%3Crect x='50' y='50' width='100' height='100' fill='%23667eea'/%3E%3Ctext x='100' y='110' text-anchor='middle' fill='white' font-size='20'>AMD</text>%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: [],
        discount: 14
    },
    {
        id: 21,
        name: "Corsair DDR5 64GB 6000MHz",
        category: "components",
        brand: "Corsair",
        price: 24990,
        oldPrice: 29990,
        rating: 4.6,
        reviews: 145,
        description: "Быстрая оперативная память для новых платформ",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Crect width='300' height='100' fill='%23f7fafc'/%3E%3Crect x='40' y='20' width='220' height='60' rx='3' fill='%232d3748'/%3E%3C/svg%3E",
        colors: ["#black", "#white"],
        inStock: true,
        badges: [],
        discount: 17
    },
    {
        id: 22,
        name: "Samsung 990 PRO 2TB",
        category: "components",
        brand: "Samsung",
        price: 19990,
        oldPrice: 24990,
        rating: 4.8,
        reviews: 312,
        description: "Сверхбыстрый NVMe SSD для профессионалов",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%23edf2f7'/%3E%3Crect x='30' y='25' width='140' height='50' rx='2' fill='%234a5568'/%3E%3C/svg%3E",
        colors: ["#black"],
        inStock: true,
        badges: ["sale"],
        discount: 20
    }
];

// Category names mapping
const categoryNames = {
    laptops: "Ноутбуки",
    smartphones: "Смартфоны",
    monitors: "Мониторы",
    gaming: "Игровые аксессуары",
    headphones: "Наушники",
    components: "Комплектующие"
};

/**
 * Get all products
 * @returns {Array} Array of all products
 */
function getAllProducts() {
    return [...productsData];
}

/**
 * Get product by ID
 * @param {number} id - Product ID
 * @returns {Object|null} Product object or null
 */
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id)) || null;
}

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Array} Filtered products
 */
function getProductsByCategory(category) {
    return productsData.filter(product => product.category === category);
}

/**
 * Get bestsellers (products with top badge)
 * @returns {Array} Bestseller products
 */
function getBestsellers() {
    return productsData.filter(product => 
        product.badges.includes("top") || product.reviews > 300
    ).slice(0, 4);
}

/**
 * Get new arrivals (products with new badge)
 * @returns {Array} New products
 */
function getNewArrivals() {
    return productsData.filter(product => 
        product.badges.includes("new")
    ).slice(0, 4);
}

/**
 * Get recommended products
 * @returns {Array} Recommended products
 */
function getRecommended() {
    return productsData
        .filter(product => product.rating >= 4.7 && product.inStock)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
}

/**
 * Search products by query
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
function searchProducts(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];
    
    return productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

/**
 * Filter products based on criteria
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered products
 */
function filterProducts(filters = {}) {
    let filtered = [...productsData];
    
    // Category filter
    if (filters.categories && filters.categories.length > 0) {
        filtered = filtered.filter(product => 
            filters.categories.includes(product.category)
        );
    }
    
    // Brand filter
    if (filters.brands && filters.brands.length > 0) {
        filtered = filtered.filter(product => 
            filters.brands.includes(product.brand)
        );
    }
    
    // Price filter
    if (filters.minPrice !== undefined && filters.minPrice !== "") {
        filtered = filtered.filter(product => 
            product.price >= parseFloat(filters.minPrice)
        );
    }
    if (filters.maxPrice !== undefined && filters.maxPrice !== "") {
        filtered = filtered.filter(product => 
            product.price <= parseFloat(filters.maxPrice)
        );
    }
    
    // Rating filter
    if (filters.rating && filters.rating > 0) {
        filtered = filtered.filter(product => 
            product.rating >= parseFloat(filters.rating)
        );
    }
    
    // Stock filter
    if (filters.inStockOnly) {
        filtered = filtered.filter(product => product.inStock);
    }
    
    return filtered;
}

/**
 * Sort products
 * @param {Array} products - Products array
 * @param {string} sortBy - Sort criteria
 * @returns {Array} Sorted products
 */
function sortProducts(products, sortBy = "default") {
    const sorted = [...products];
    
    switch (sortBy) {
        case "price-low":
            return sorted.sort((a, b) => a.price - b.price);
        case "price-high":
            return sorted.sort((a, b) => b.price - a.price);
        case "rating":
            return sorted.sort((a, b) => b.rating - a.rating);
        case "name":
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case "newest":
            return sorted.sort((a, b) => {
                if (a.badges.includes("new") && !b.badges.includes("new")) return -1;
                if (!a.badges.includes("new") && b.badges.includes("new")) return 1;
                return 0;
            });
        default:
            return sorted;
    }
}

/**
 * Format price with currency
 * @param {number} price - Price value
 * @returns {string} Formatted price
 */
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}

/**
 * Generate star rating HTML
 * @param {number} rating - Rating value (0-5)
 * @returns {string} Stars HTML
 */
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '½';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Export functions for use in other modules
window.ProductsModule = {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getBestsellers,
    getNewArrivals,
    getRecommended,
    searchProducts,
    filterProducts,
    sortProducts,
    formatPrice,
    generateStars,
    categoryNames
};
