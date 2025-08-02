/**
 * Home Services Theme JavaScript
 * Main JavaScript functionality for the Hugo theme
 */

(function() {
    'use strict';

    // Global variables
    let isScrolling = false;
    let lastScrollTop = 0;

    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSmoothScrolling();
        initBackToTop();
        initHeaderBehavior();
        initLazyLoading();
        initFormHandling();
        initAnimations();
        initTestimonialSlider();
        initEmergencyFloat();
        initPhoneNumberFormatting();
        initTooltips();
        initLoadingStates();
    });

    /**
     * Mobile Menu Functionality
     */
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.navbar-toggler');
        const mobileMenu = document.querySelector('#navbarMain');
        const menuLinks = document.querySelectorAll('.navbar-nav .nav-link');

        if (mobileMenuToggle && mobileMenu) {
            // Toggle menu
            mobileMenuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('show');
                this.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });

            // Close menu when clicking on links
            menuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 991) {
                        mobileMenu.classList.remove('show');
                        mobileMenuToggle.classList.remove('active');
                        document.body.classList.remove('menu-open');
                    }
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                    mobileMenu.classList.remove('show');
                    mobileMenuToggle.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    }

    /**
     * Smooth Scrolling for Anchor Links
     */
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement && targetId !== '#') {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Back to Top Button
     */
    function initBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        if (backToTopBtn) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', debounce(function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.style.display = 'flex';
                    backToTopBtn.style.opacity = '1';
                } else {
                    backToTopBtn.style.opacity = '0';
                    setTimeout(() => {
                        if (backToTopBtn.style.opacity === '0') {
                            backToTopBtn.style.display = 'none';
                        }
                    }, 300);
                }
            }, 100));

            // Scroll to top when clicked
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    /**
     * Header Behavior on Scroll
     */
    function initHeaderBehavior() {
        const header = document.querySelector('.site-header');
        
        if (header) {
            window.addEventListener('scroll', debounce(function() {
                const currentScrollTop = window.pageYOffset;
                
                // Add shadow when scrolling
                if (currentScrollTop > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                // Hide/show header on scroll (mobile only)
                if (window.innerWidth <= 768) {
                    if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
                        header.style.transform = 'translateY(-100%)';
                    } else {
                        header.style.transform = 'translateY(0)';
                    }
                }
                
                lastScrollTop = currentScrollTop;
            }, 100));
        }
    }

    /**
     * Lazy Loading for Images
     */
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    /**
     * Form Handling
     */
    function initFormHandling() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                if (!validateForm(this)) {
                    e.preventDefault();
                    return false;
                }
                
                handleFormSubmission(this, e);
            });

            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                input.addEventListener('input', function() {
                    if (this.classList.contains('is-invalid')) {
                        validateField(this);
                    }
                });
            });
        });
    }

    /**
     * Form Validation
     */
    function validateForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styles
        field.classList.remove('is-invalid', 'is-valid');
        const existingError = field.parentNode.querySelector('.invalid-feedback');
        if (existingError) {
            existingError.remove();
        }

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required.';
        }
        
        // Email validation
        else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
        }
        
        // Phone validation
        else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            const cleanPhone = value.replace(/[\s\-\(\)\.]/g, '');
            if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number.';
            }
        }

        // Add validation classes and error message
        if (isValid) {
            field.classList.add('is-valid');
        } else {
            field.classList.add('is-invalid');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            errorDiv.textContent = errorMessage;
            field.parentNode.appendChild(errorDiv);
        }

        return isValid;
    }

    /**
     * Handle Form Submission
     */
    function handleFormSubmission(form, event) {
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        
        // If it's a Netlify form, let it submit naturally
        if (form.hasAttribute('netlify') || form.hasAttribute('data-netlify')) {
            return; // Let the form submit normally
        }
        
        // For other forms, prevent default and handle with AJAX
        event.preventDefault();
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            showFormSuccess(form, submitButton, originalText);
        }, 2000);
    }

    function showFormSuccess(form, submitButton, originalText) {
        // Success state
        submitButton.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
        submitButton.classList.remove('btn-primary');
        submitButton.classList.add('btn-success');
        
        // Reset form
        form.reset();
        form.querySelectorAll('.is-valid, .is-invalid').forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
        
        // Show success message
        showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');
        
        // Reset button after delay
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('btn-success');
            submitButton.classList.add('btn-primary');
        }, 5000);
    }

    /**
     * Scroll Animations
     */
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => animationObserver.observe(el));
        }
    }

    /**
     * Testimonial Slider
     */
    function initTestimonialSlider() {
        const testimonialContainer = document.querySelector('.testimonials-carousel');
        if (!testimonialContainer) return;

        const testimonials = testimonialContainer.querySelectorAll('.testimonial-card');
        if (testimonials.length <= 1) return;

        let currentIndex = 0;
        const totalTestimonials = testimonials.length;

        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        for (let i = 0; i < totalTestimonials; i++) {
            const dot = document.createElement('button');
            dot.className = `testimonial-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToTestimonial(i));
            dotsContainer.appendChild(dot);
        }
        testimonialContainer.parentNode.appendChild(dotsContainer);

        function goToTestimonial(index) {
            testimonials[currentIndex].style.display = 'none';
            document.querySelectorAll('.testimonial-dot')[currentIndex].classList.remove('active');
            
            currentIndex = index;
            testimonials[currentIndex].style.display = 'block';
            document.querySelectorAll('.testimonial-dot')[currentIndex].classList.add('active');
        }

        // Auto-advance testimonials
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % totalTestimonials;
            goToTestimonial(nextIndex);
        }, 5000);
    }

    /**
     * Emergency Float Animation
     */
    function initEmergencyFloat() {
        const emergencyFloat = document.querySelector('.emergency-float');
        if (emergencyFloat) {
            // Add pulsing animation
            emergencyFloat.style.animation = 'pulse 2s infinite';
        }
    }

    /**
     * Phone Number Formatting
     */
    function initPhoneNumberFormatting() {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        
        phoneInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length >= 6) {
                    value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                } else if (value.length >= 3) {
                    value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
                }
                
                e.target.value = value;
            });
        });
    }

    /**
     * Initialize Tooltips
     */
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        if (tooltipElements.length > 0 && typeof bootstrap !== 'undefined') {
            tooltipElements.forEach(el => {
                new bootstrap.Tooltip(el);
            });
        }
    }

    /**
     * Loading States for Buttons
     */
    function initLoadingStates() {
        const loadingButtons = document.querySelectorAll('.btn[data-loading-text]');
        
        loadingButtons.forEach(button => {
            button.addEventListener('click', function() {
                const originalText = this.innerHTML;
                const loadingText = this.getAttribute('data-loading-text');
                
                if (loadingText) {
                    this.innerHTML = loadingText;
                    this.disabled = true;
                    
                    // Reset after 5 seconds (adjust as needed)
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.disabled = false;
                    }, 5000);
                }
            });
        });
    }

    /**
     * Show Notifications
     */
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} notification-toast`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
            ${message}
            <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Position and show
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            animation: slideInRight 0.3s ease;
        `;
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    /**
     * Utility Functions
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Preload Critical Resources
     */
    function preloadCriticalResources() {
        // Preload important images
        const criticalImages = [
            '/images/hero/home-services-hero.jpg',
            '/images/logos/company-logo.png'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    /**
     * Service Worker Registration (if available)
     */
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Initialize critical resources
    preloadCriticalResources();

})();

/**
 * CSS Animations (to be added to CSS file)
 */
const cssAnimations = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes slideInRight {
    from { 
        transform: translateX(100%); 
        opacity: 0; 
    }
    to { 
        transform: translateX(0); 
        opacity: 1; 
    }
}

@keyframes slideOutRight {
    from { 
        transform: translateX(0); 
        opacity: 1; 
    }
    to { 
        transform: translateX(100%); 
        opacity: 0; 
    }
}

.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.animate-on-scroll.animated {
    opacity: 1;
    transform: translateY(0);
}

.notification-toast {
    animation: slideInRight 0.3s ease;
}

.filtered-out {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
}

.site-header {
    transition: transform 0.3s ease;
}

.site-header.scrolled {
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.testimonial-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
}

.testimonial-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: #ccc;
    cursor: pointer;
    transition: all 0.3s ease;
}

.testimonial-dot.active {
    background: var(--primary-color);
    transform: scale(1.2);
}
`;