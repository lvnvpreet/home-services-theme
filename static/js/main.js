// Home Services Theme JavaScript

// Image Fallback Handler
document.addEventListener('DOMContentLoaded', function() {
    // Handle broken images
    const images = document.querySelectorAll('img');
    
    images.forEach(function(img) {
        img.addEventListener('error', function() {
            // Hide the broken image
            this.style.display = 'none';
            
            // Get the parent container
            const parent = this.parentElement;
            
            // Add appropriate fallback class based on context
            if (parent.classList.contains('hero-bg')) {
                parent.classList.add('hero-fallback');
            } else if (parent.classList.contains('service-image')) {
                parent.classList.add('service-image-fallback');
            } else if (parent.classList.contains('team-image')) {
                parent.classList.add('team-image-fallback');
            } else if (parent.classList.contains('blog-image')) {
                parent.classList.add('blog-image-fallback');
            } else if (parent.classList.contains('about-image')) {
                parent.classList.add('about-image-fallback');
            } else {
                parent.classList.add('img-fallback');
            }
        });
        
        // Check if image src is empty or invalid
        if (!img.src || img.src === '' || img.src === window.location.href) {
            img.dispatchEvent(new Event('error'));
        }
    });
});

// Smooth scrolling for anchor links
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

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Phone number formatting and click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(function(phoneLink) {
    phoneLink.addEventListener('click', function() {
        // Optional: Add analytics tracking here
        console.log('Phone number clicked:', this.href);
    });
});

// Form validation enhancement
document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid');
            } else {
                field.classList.remove('is-invalid');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

// Lazy loading for images (if not using native lazy loading)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}