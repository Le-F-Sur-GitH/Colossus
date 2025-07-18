// Navigation mobile
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Scroll vers une section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Fermer le menu mobile si ouvert
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    }
}

// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simuler l'envoi du formulaire
    const form = document.getElementById('contactForm');
    const success = document.getElementById('contactSuccess');
    
    // Cacher le formulaire et afficher le message de succès
    form.style.display = 'none';
    success.style.display = 'block';
    
    // Optionnel : réinitialiser le formulaire après quelques secondes
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        success.style.display = 'none';
    }, 5000);
});

// Fermer le menu mobile quand on clique en dehors
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav');
    const navMenu = document.getElementById('navMenu');
    
    if (!nav.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Animation au scroll (optionnel)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

// Smooth scroll pour tous les liens d'ancrage
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