// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on mobile
const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
