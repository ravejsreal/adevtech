// Pricing Toggle
document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.querySelector('.pricing-toggle input');
    const amounts = document.querySelectorAll('.amount');
    const monthlyPrices = ['₹3,499', '₹5,999', '₹9,999'];
    const yearlyPrices = ['₹34,990', '₹59,990', '₹99,990'];

    pricingToggle.addEventListener('change', function() {
        amounts.forEach((amount, index) => {
            amount.style.transform = 'translateY(-10px)';
            amount.style.opacity = '0';
            
            setTimeout(() => {
                amount.textContent = this.checked ? yearlyPrices[index] : monthlyPrices[index];
                amount.style.transform = 'translateY(0)';
                amount.style.opacity = '1';
            }, 200);
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Animation on Scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .price-card, .integration-card').forEach(el => {
    observer.observe(el);
});

// Dropdown Menu
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Hero Image Parallax Effect
const heroVisual = document.querySelector('.hero-visual');
const floatingCards = document.querySelectorAll('.float-card');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 50;
    const y = (clientY - window.innerHeight / 2) / 50;

    heroVisual.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`;
    
    floatingCards.forEach(card => {
        const speed = card.getAttribute('data-speed') || 2;
        const xOffset = x * speed;
        const yOffset = y * speed;
        card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
}); 