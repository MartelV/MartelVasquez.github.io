// JavaScript for intro scroll effect and circle expansion on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const intro = document.querySelector('.intro');
    const heroHeader = document.querySelector('.hero-header');

    if (scrollY > 0) {
        intro.classList.add('expanded');

        setTimeout(function() {
            intro.classList.add('hidden');
            heroHeader.style.opacity = '1'; // Ensure the header image is visible
        }, 1000); // Delay to allow the expansion to complete before hiding
    }
});

// JavaScript to handle navigation bar disappearing on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (scrollY > 100) {
        navbar.style.top = '-100px';
    } else {
        navbar.style.top = '0';
    }
});

// JavaScript to refresh the page when the logo is clicked
document.querySelector('.logo').addEventListener('click', function() {
    location.reload();
});
