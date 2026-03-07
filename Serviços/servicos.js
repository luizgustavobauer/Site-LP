// Services Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    renderAllServices();
});

// Render all services in full grid
function renderAllServices() {
    const container = document.getElementById('servicesGridFull');
    if (!container) return;
    
    container.innerHTML = '';
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card-full bounce-in-animation';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="service-card-icon">${service.icon}</div>
            <h3 class="service-card-title">${service.title}</h3>
            <p class="service-card-desc">${service.desc}</p>
            <div class="service-card-divider"></div>
            <ul class="service-card-features">
                ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <a href="../Contato/contato.html" class="service-card-cta hover-lift">
                Saber Mais <i class="fas fa-arrow-right"></i>
            </a>
        `;
        
        container.appendChild(card);
    });
}