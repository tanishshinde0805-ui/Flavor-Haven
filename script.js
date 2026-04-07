// Global Navigation and Common Functions
document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    setTimeout(() => {
        hideLoadingScreen();
    }, 1500);

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar Active Link Highlighting
    highlightActiveNavLink();

    // Scroll Animations
    initScrollAnimations();

    // Initialize Cart Counter
    updateCartCounter();
});

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        navbar.style.padding = '0.8rem 0';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '1.2rem 0';
    }
}

// Active Navbar Link
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .menu-card, .dish-card').forEach(el => {
        observer.observe(el);
    });
}

// Page Transition Effect
function pageTransition() {
    document.body.classList.add('page-transition');
    setTimeout(() => {
        document.body.classList.remove('page-transition');
    }, 300);
}

// Export functions for other scripts
window.CommonUtils = {
    updateCartCounter,
    showToast,
    pageTransition
};