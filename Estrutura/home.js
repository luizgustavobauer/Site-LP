// Home Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedServices();
    renderCases('casesGrid');
    renderTestimonials('testimonialsGrid');
    animateCounters();
});

// Animate Counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;
        
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}