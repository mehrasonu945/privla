const products = [
    {
        id: 1,
        name: "Pine Forest Bar Soap",
        price: 8.50,
        image: "images/soap1.jpg",
        category: "soap",
        description: "Cedarwood, pine needle, and fresh forest air. 4oz bar.",
        url: "#"
    },
    {
        id: 2,
        name: "Cedarwood Soy Candle",
        price: 24.00,
        image: "images/candle1.jpg",
        category: "candle",
        description: "Warm cedarwood and subtle vanilla. 8oz jar, 40hr burn.",
        url: "#"
    },
    {
        id: 3,
        name: "Lavender Fields Bath Bomb",
        price: 6.50,
        image: "images/soap1.jpg",
        category: "bath",
        description: "Relaxing lavender and chamomile. Natural colorants.",
        url: "#"
    }
    // Add more products...
];

let filteredProducts = [...products];

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('#product-grid');
    setupFilters();
    setupMobileMenu();
});

function loadProducts(containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <p class="product-description">${product.description}</p>
            <a href="${product.url}" class="btn btn-primary">Add to Cart</a>
        </div>
    `;
    return card;
}

function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const searchInput = document.getElementById('searchInput');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
}

function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const priceFilter = document.getElementById('priceFilter')?.value || 'all';
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase()
    // Contact Form Handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Show success message
    alert('Thank you! Your message has been sent. We\'ll respond within 24 hours.');
    this.reset();
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
    });
});