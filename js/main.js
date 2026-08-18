/**
 * Main JavaScript Module
 * Handles all main functionality including UI interactions, theme toggle, etc.
 */

// DOM Elements
const header = document.getElementById('header');
const burgerMenu = document.getElementById('burgerMenu');
const nav = document.getElementById('nav');
const themeToggle = document.getElementById('themeToggle');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const preloader = document.getElementById('preloader');
const modalOverlay = document.getElementById('modalOverlay');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
const newsletterForm = document.getElementById('newsletterForm');

// State
let lastScrollY = 0;

/**
 * Initialize all modules and event listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader
    hidePreloader();
    
    // Initialize modules
    if (window.CartModule) window.CartModule.initCart();
    if (window.SearchModule) window.SearchModule.initSearch();
    
    // Initialize UI components
    initHeader();
    initTheme();
    initScrollToTop();
    initMobileMenu();
    initSmoothScroll();
    initCursor();
    initScrollAnimations();
    initPromoTimer();
    initNewsletter();
    initCategoryFilters();
});

/**
 * Hide preloader after page load
 */
function hidePreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    });
}

/**
 * Initialize header scroll behavior
 */
function initHeader() {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Sticky header
        if (currentScrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        // Scroll to top button visibility
        if (currentScrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        lastScrollY = currentScrollY;
    });
}

/**
 * Initialize theme toggle
 */
function initTheme() {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('techstore_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Theme toggle click handler
    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('techstore_theme', newTheme);
        
        // Animate toggle
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
}

/**
 * Initialize scroll to top button
 */
function initScrollToTop() {
    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
    burgerMenu?.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    nav?.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burgerMenu.contains(e.target) && nav.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize custom cursor
 */
function initCursor() {
    if (!cursor || !cursorFollower) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Linear interpolation for smoother movement
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX - 5}px, ${cursorY - 5}px)`;
        cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .product-card, .category-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            cursorFollower.style.transform += ' scale(1.2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursorFollower.style.transform = cursorFollower.style.transform.replace(' scale(1.2)', '');
        });
    });
}

/**
 * Initialize scroll reveal animations
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.fade-in, .reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

/**
 * Initialize promo timer countdown
 */
function initPromoTimer() {
    const timerElement = document.getElementById('promoTimer');
    if (!timerElement) return;
    
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance < 0) {
            // Reset timer
            endDate.setDate(endDate.getDate() + 7);
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

/**
 * Initialize newsletter form
 */
function initNewsletter() {
    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        const email = emailInput.value;
        
        if (email) {
            showToast('Спасибо за подписку!', 'success');
            emailInput.value = '';
        }
    });
}

/**
 * Initialize category card filters
 */
function initCategoryFilters() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Scroll to products section
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            
            // Apply category filter
            const categoryCheckbox = document.querySelector(`#categoryFilters input[value="${category}"]`);
            if (categoryCheckbox) {
                categoryCheckbox.checked = true;
                if (window.SearchModule) window.SearchModule.applyFiltersAndSort();
            }
        });
    });
}

/**
 * Open product modal
 * @param {number} productId - Product ID
 */
function openProductModal(productId) {
    const product = window.ProductsModule.getProductById(productId);
    if (!product) return;
    
    const { formatPrice, generateStars, categoryNames } = window.ProductsModule;
    const isFav = window.CartModule.isFavorite(product.id);
    
    modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <span class="product-category">${categoryNames[product.category] || product.category}</span>
                <h2>${product.name}</h2>
                <div class="product-rating" style="margin-bottom: 1rem;">
                    <span class="stars">${generateStars(product.rating)}</span>
                    <span class="rating-count">${product.reviews} отзывов</span>
                </div>
                <p class="modal-product-description">${product.description}</p>
                <p class="modal-product-description">Характеристики:</p>
                <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: var(--text-secondary);">
                    <li>Бренд: ${product.brand}</li>
                    <li>Категория: ${categoryNames[product.category]}</li>
                    <li>Рейтинг: ${product.rating}/5</li>
                    <li>${product.inStock ? '✓ В наличии' : '✗ Нет в наличии'}</li>
                </ul>
                <div class="modal-product-price">
                    ${product.oldPrice ? `<span class="modal-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                    <span class="modal-new-price">${formatPrice(product.price)}</span>
                    ${product.discount ? `<span class="discount-percent">-${product.discount}%</span>` : ''}
                </div>
                <div class="product-colors" style="margin-bottom: 1.5rem;">
                    ${product.colors.map(color => 
                        `<span class="color-option" style="background-color: ${color};"></span>`
                    ).join('')}
                </div>
                <div class="modal-product-buttons">
                    <button class="btn btn-primary" onclick="addToCart({id: ${product.id}, name: '${product.name}', price: ${product.price}, image: '${product.image}'}); closeModalFunc();" style="flex: 1;">
                        Добавить в корзину
                    </button>
                    <button class="product-action-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${product.id}); this.classList.toggle('active');" style="width: 50px; height: 50px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close product modal
 */
function closeModalFunc() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listener for close modal button
closeModal?.addEventListener('click', closeModalFunc);
modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModalFunc();
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalFunc();
        if (window.CartModule) window.CartModule.closeCart();
    }
});

// Make functions globally available
window.openProductModal = openProductModal;
window.closeModalFunc = closeModalFunc;
