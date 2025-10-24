// ===== EFEITOS DE ROLAGEM =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
            
    // Revelar elementos ao rolar a página
    const reveals = document.querySelectorAll('.product-card, .about-content, .contact-info');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
                
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
});

// ===== EFEITOS SUAVES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
                
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
                
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});