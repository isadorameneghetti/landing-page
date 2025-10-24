 // ===== NAVBAR RESPONSIVO =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
        
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });
        
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-times');
    });
});