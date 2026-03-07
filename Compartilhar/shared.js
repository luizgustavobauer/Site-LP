// ========== DATA ==========
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
    },
    { 
        name: 'Carlos Pereira', 
        role: 'Gerente de Operações', 
        text: 'A LP Agência levou nosso e‑commerce a outro nível. Crescimento de 200% em um ano.',
        stars: 5
    },
    { 
        name: 'Ana Oliveira', 
        role: 'Fundadora StartUp', 
        text: 'Profissionais dedicados e atendimento impecável. Recomendo sem hesitar.',
        stars: 5
    }
];

const blogPosts = [
    { title: 'Tendências de Marketing 2025', date: '15 Mar', category: 'Estratégia', slug: 'tendencias-marketing' },
    { title: 'Como Viralizar no TikTok', date: '12 Mar', category: 'Social Media', slug: 'viralizar-tiktok' },
    { title: 'Guia Completo de Google Ads', date: '10 Mar', category: 'Publicidade', slug: 'google-ads' }
];

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', function() {
    renderNavbar();
    renderFooter();
    setupMobileMenu();
});

// ========== NAVBAR ==========
function renderNavbar() {
    const navbar = document.getElementById('navbar');
    const currentPage = getCurrentPage();
    
    navbar.innerHTML = `
        <div class="nav-container">
            <a href="../Estrutura/index.html" class="logo">
                <!-- substitua o caminho abaixo pela sua imagem de logo real -->
                <img src="../img/ORIGINAL SEM FUNDO.png" alt="LP Agência" class="logo-img" />
            </a>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i class="fas fa-bars"></i>
            </button>

            <div class="nav-menu" id="navMenu">
                <a href="../Estrutura/index.html" class="nav-link ${currentPage === 'index' ? 'active' : ''}">Home</a>
                <a href="../Serviços/servicos.html" class="nav-link ${currentPage === 'servicos' ? 'active' : ''}">Serviços</a>
                <a href="../Cases/cases.html" class="nav-link ${currentPage === 'cases' ? 'active' : ''}">Cases</a>
                <a href="../Blog/blog.html" class="nav-link ${currentPage === 'blog' ? 'active' : ''}">Blog</a>
                <a href="../Contato/contato.html" class="nav-link ${currentPage === 'contato' ? 'active' : ''}">Contato</a>
                <button class="btn-orcamento" onclick="window.location.href='../Contato/contato.html'">Solicitar Orçamento</button>
            </div>
        </div>
    `;
}

// ========== FOOTER ==========
function renderFooter() {
    const footer = document.getElementById('footer');
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col fade-in">
                    <div class="footer-logo">
                        <span class="logo-nexus">LP Agência</span> de Marketing
                    </div>
                    <p>Transformando marcas em sucessos desde 2016.</p>
                </div>
                <div class="footer-col fade-in">
                    <h4>Sobre</h4>
                    <ul>
                        <li><a href="../Estrutura/index.html">Quem somos</a></li>
                        <li><a href="../Serviços/servicos.html">Nossa missão</a></li>
                        <li><a href="../Blog/blog.html">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-col fade-in">
                    <h4>Serviços</h4>
                    <ul>
                        <li><a href="../Serviços/servicos.html">Estratégia Digital</a></li>
                        <li><a href="../Serviços/servicos.html">Social Media</a></li>
                        <li><a href="../Serviços/servicos.html">Publicidade Digital</a></li>
                        <li><a href="../Serviços/servicos.html">Design & Branding</a></li>
                        <li><a href="../Serviços/servicos.html">SEO & Conteúdo</a></li>
                        <li><a href="../Serviços/servicos.html">Email Marketing</a></li>
                    </ul>
                </div>
                <div class="footer-col fade-in">
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="mailto:lpagenciademarketing@gmail.com">lpagenciademarketing@gmail.com</a></li>
                        <li><a href="tel:+5549998203485">(49) 99820-3485</a></li>
                        <li><a href="https://instagram.com/lp.mkt.digital" target="_blank">@lp.mkt.digital</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2025 LP AGÊNCIA DE MARKETING DIGITAL. Todos os direitos reservados. 🚀</p>
            </div>
        </div>
    `;
}

// ========== MOBILE MENU ==========
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.style.transform = navMenu.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.style.transform = 'rotate(0)';
        });
    });
}

// ========== UTILITY FUNCTIONS ==========
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('servicos')) return 'servicos';
    if (path.includes('cases')) return 'cases';
    if (path.includes('blog')) return 'blog';
    if (path.includes('contato')) return 'contato';
    return 'index';
}

// ========== RENDER SERVICES ==========
function renderServices(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card bounce-in-animation';
        card.style.animationDelay = `${index * 0.1}s`;
        
        if (index === 0) card.classList.add('active');
        
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.desc}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        
        card.addEventListener('click', () => selectService(containerId, index));
        container.appendChild(card);
    });
}

function selectService(containerId, index) {
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll('.service-card');
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// ========== RENDER FEATURED SERVICES ==========
function renderFeaturedServices() {
    const container = document.getElementById('featuredServicesGrid');
    if (!container) return;
    
    container.innerHTML = '';
    services.slice(0, 3).forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card bounce-in-animation';
        card.style.animationDelay = `${index * 0.1}s`;
        
        if (index === 0) card.classList.add('active');
        
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.desc}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        
        card.addEventListener('click', () => selectService('featuredServicesGrid', index));
        container.appendChild(card);
    });
}

// ========== RENDER CASES ==========
function renderCases(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    cases.forEach((caseItem, index) => {
        const card = document.createElement('div');
        card.className = `case-card ${caseItem.bg} bounce-in-animation`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="case-content">
                <h3 class="case-name">${caseItem.name}</h3>
                <p class="case-result">${caseItem.result}</p>
                <p class="case-text">Crescimento conquistado com estratégia e execução impecável</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ========== RENDER TESTIMONIALS ==========
function renderTestimonials(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card bounce-in-animation';
        card.style.animationDelay = `${index * 0.1}s`;
        
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
        
        container.appendChild(card);
    });
    
    // clone the cards to make the scrolling seamless (no pause at reset)
    const cards = container.querySelectorAll('.testimonial-card');
    cards.forEach(card => container.appendChild(card.cloneNode(true)));
}

// ========== RENDER BLOG POSTS ==========
function renderBlogPosts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    blogPosts.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'blog-card bounce-in-animation';
        card.style.animationDelay = `${index * 0.1}s`;
        
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
        
        container.appendChild(card);
    });
}

// ========== FORM VALIDATION ==========
function setupFormSubmit(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea, select');
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
            // special behaviour for the contact page form: build and open WhatsApp link
            if (formId === 'contactForm') {
                const name = form.querySelector('input[placeholder="Seu nome completo"]').value.trim();
                const serviceSelect = form.querySelector('select');
                const service = serviceSelect.options[serviceSelect.selectedIndex].text;
                const message = form.querySelector('textarea').value.trim();

                const textLines = [
                    `Olá, meu nome é ${name}.`,
                    `Em relação ao serviço ${service}.`,
                    `${message}`
                ];
                const text = textLines.join('\n'); // newlines will be encoded by encodeURIComponent

                // company WhatsApp number (without + or dashes)
                const phone = '5549998203485';
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

                window.open(url, '_blank');
                form.reset();
                return; // skip the success banner
            }

            // default behaviour for other forms
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            button.innerHTML = '✓ Mensagem enviada com sucesso!';
            button.style.backgroundColor = '#10b981';
            
            form.reset();
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 3000);
        }
    });
}