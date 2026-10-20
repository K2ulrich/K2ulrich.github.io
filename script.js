// script.js

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Validation du formulaire de contact
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Veuillez entrer un email valide.');
        return;
    }
    
    // Simulation d'envoi
    alert(`Merci ${name} ! Votre message a été envoyé. Je vous répondrai bientôt à ${email}.`);
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Animation au défilement
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
}// Dans votre script.js - SOLUTION COMPLÈTE
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        
        // Animation
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        // Détecter si on est en local ou en ligne
        const isLocal = window.location.protocol === 'file:';
        
        if (isLocal) {
            // EN LOCAL : Ouvrir Gmail
            setTimeout(() => {
                const name = this.querySelector('[name="name"]').value;
                const email = this.querySelector('[name="email"]').value;
                const message = this.querySelector('[name="message"]').value;
                
                const subject = `Message Portfolio - ${name}`;
                const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                
                // Ouvrir client email
                window.location.href = `mailto:konanulrich38@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Feedback
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Email ouvert !';
                setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
            
        } else {
            // EN LIGNE : Envoyer via FormSubmit
            // Laisser FormSubmit gérer normalement
            setTimeout(() => {
                this.submit(); // Soumission normale
            }, 1500);
        }
    });
}
