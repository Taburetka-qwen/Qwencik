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
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1544731612-de7f96afe58f?w=800&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=800&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=800&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?w=600&h=800&fit=crop&crop=center",
        colors: ["#black", "#white"],
        inStock: true,
        badges: [],
        discount: 17
    },
    {
        id: 8,
        name: "Google Pixel 8 Pro",
        category: "smartphones",
        brand: "Google",
        price: 89990,
        oldPrice: 99990,
        rating: 4.7,
        reviews: 198,
        description: "Чистый Android и лучшие AI-функции от Google",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?w=600&h=800&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=800&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&h=800&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=400&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&h=300&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1628557044797-f21a17b9e56e?w=400&h=300&fit=crop&crop=center",
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
