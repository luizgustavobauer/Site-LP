// Blog Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPostsFull();
    setupNewsletterForm();
});

// Render blog posts with full details
function renderBlogPostsFull() {
    const container = document.getElementById('blogGridFull');
    if (!container) return;
    
    const extendedPosts = [
        { 
            title: 'Tendências de Marketing 2025', 
            date: '15 Mar', 
            category: 'Estratégia',
            excerpt: 'Descubra as principais tendências que vão dominar o marketing digital em 2025 e como sua marca pode aproveitar.',
            slug: 'tendencias-marketing'
        },
        { 
            title: 'Como Viralizar no TikTok', 
            date: '12 Mar', 
            category: 'Social Media',
            excerpt: 'Guia completo com estratégias comprovadas para criar conteúdo viral e aumentar seu alcance no TikTok.',
            slug: 'viralizar-tiktok'
        },
        { 
            title: 'Guia Completo de Google Ads', 
            date: '10 Mar', 
            category: 'Publicidade',
            excerpt: 'Aprenda como configurar e otimizar suas campanhas no Google Ads para obter máximo retorno.',
            slug: 'google-ads'
        },
        { 
            title: 'SEO em 2025: O que Mudou', 
            date: '08 Mar', 
            category: 'SEO',
            excerpt: 'Entenda as mudanças no algoritmo do Google e como adaptar sua estratégia de SEO.',
            slug: 'seo-2025'
        },
        { 
            title: 'Email Marketing que Converte', 
            date: '05 Mar', 
            category: 'Email',
            excerpt: 'Técnicas de email marketing que aumentam taxa de abertura e conversão garantidamente.',
            slug: 'email-marketing'
        },
        { 
            title: 'Branding: Guia Prático', 
            date: '01 Mar', 
            category: 'Branding',
            excerpt: 'Como construir uma identidade de marca forte e memorável que conquista seus clientes.',
            slug: 'branding-guia'
        }
    ];
    
    container.innerHTML = '';
    extendedPosts.forEach((post, index) => {
        const card = document.createElement('div');
        card.className = 'blog-card-full bounce-in-animation';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const categoryColors = {
            'Estratégia': '#2563eb',
            'Social Media': '#9333ea',
            'Publicidade': '#f97316',
            'SEO': '#14b8a6',
            'Email': '#ec4899',
            'Branding': '#4f46e5'
        };
        
        card.innerHTML = `
            <div class="blog-card-image" style="background: linear-gradient(135deg, ${categoryColors[post.category]} 0%, ${categoryColors[post.category]}dd 100%);"></div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-card-category" style="background-color: ${categoryColors[post.category]}20; color: ${categoryColors[post.category]};">${post.category}</span>
                    <span class="blog-card-date">${post.date}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="#" class="blog-card-cta hover-lift">
                    Ler Artigo <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Newsletter Form Setup
function setupNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]');
        const button = form.querySelector('button');
        const originalText = button.innerHTML;
        
        if (email.value.trim()) {
            button.innerHTML = '✓ Inscrito com sucesso!';
            button.style.backgroundColor = '#10b981';
            
            email.value = '';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = '';
            }, 3000);
        }
    });
}