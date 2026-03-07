// Data
const services = [
    {
        title: 'Estratégia Digital',
        desc: 'Planejamento completo de presença online e posicionamento de marca',
        icon: '🎯',
        features: ['Análise de mercado', 'Posicionamento', 'Roadmap 12 meses']
    },
    {
        title: 'Social Media',
        desc: 'Conteúdo viral e gestão de comunidades que engajam de verdade',
        icon: '📱',
        features: ['Criação de conteúdo', 'Gestão de crises', 'Análise de dados']
    },
    {
        title: 'Publicidade Digital',
        desc: 'Campanhas em Google Ads, Meta e TikTok com ROI comprovado',
        icon: '🚀',
        features: ['Google Ads', 'Meta Ads', 'Otimização contínua']
    },
    {
        title: 'Design & Branding',
        desc: 'Identidade visual que marca presença e diferencia sua marca',
        icon: '🎨',
        features: ['Logo design', 'Brand guidelines', 'Design de materiais']
    },
    {
        title: 'SEO & Conteúdo',
        desc: 'Otimização para buscadores e produção de conteúdo de alto impacto',
        icon: '📊',
        features: ['Otimização técnica', 'Estratégia de palavras-chave', 'Link building']
    },
    {
        title: 'Email Marketing',
        desc: 'Campanhas de email personalizadas que convertem e fidelizam clientes',
        icon: '💌',
        features: ['Automação', 'Segmentação', 'A/B testing']
    }
];

const cases = [
    { name: 'TechStartup X', result: '+320% em conversões', bg: 'bg-blue' },
    { name: 'E-commerce Y', result: '+150K em vendas', bg: 'bg-purple' },
    { name: 'SaaS Z', result: '+2.5M impressões', bg: 'bg-indigo' }
];

const testimonials = [
    { 
        name: 'João Silva', 
        role: 'CEO TechCorp', 
        text: 'Transformou completamente nossa presença online. Resultado em 3 meses.',
        stars: 5
    },
    { 
        name: 'Maria Santos', 
        role: 'Diretora Marketing', 
        text: 'Equipe extremamente profissional e criativa. Superou expectativas.',
        stars: 5
    }
];

const blogPosts = [
    { title: 'Tendências de Marketing 2025', date: '15 Mar', category: 'Estratégia' },
    { title: 'Como Viralizar no TikTok', date: '12 Mar', category: 'Social Media' },
    { title: 'Guia Completo de Google Ads', date: '10 Mar', category: 'Publicidade' }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderCases();
    renderTestimonials();
    renderBlogPosts();
    setupMobileMenu();
    setupFormSubmit();
});

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        if (index === 0) card.classList.add('active');
        
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.desc}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        
        card.addEventListener('click', () => selectService(index));
        servicesGrid.appendChild(card);
    });
}

// Select Service
function selectService(index) {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Render Cases
function renderCases() {
    const casesGrid = document.getElementById('casesGrid');
    
    cases.forEach(caseItem => {
        const card = document.createElement('div');
        card.className = `case-card ${caseItem.bg}`;
        
        card.innerHTML = `
            <div class="case-content">
                <h3 class="case-name">${caseItem.name}</h3>
                <p class="case-result">${caseItem.result}</p>
                <p class="case-text">Crescimento conquistado com estratégia e execução impecável</p>
            </div>
        `;
        
        casesGrid.appendChild(card);
    });
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        const stars = Array(testimonial.stars).fill('★').join('');
        
        card.innerHTML = `
            <div class="testimonial-stars">
                ${Array(testimonial.stars).fill().map(() => '<span class="star">★</span>').join('')}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div>
                <div class="testimonial-author">${testimonial.name}</div>
                <div class="testimonial-role">${testimonial.role}</div>
            </div>
        `;
        
        testimonialsGrid.appendChild(card);
    });
}

// Render Blog Posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        
        card.innerHTML = `
            <div class="blog-image"></div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-category">${post.category}</span>
                    <span class="blog-date">${post.date}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
            </div>
        `;
        
        blogGrid.appendChild(card);
    });
}

// Mobile Menu
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Form Submit
function setupFormSubmit() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        // Get values
        const inputs = form.querySelectorAll('input, textarea');
        let isEmpty = false;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isEmpty = true;
                input.style.borderColor = '#e73740';
            } else {
                input.style.borderColor = '#d1d5db';
            }
        });
        
        if (!isEmpty) {
            // Success message
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            button.innerHTML = '✓ Mensagem enviada com sucesso!';
            button.style.backgroundColor = '#10b981';
            
            // Reset form
            form.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 3000);
        }
    });
}

// Smooth Scroll (already handled by CSS)
// But we can add active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});