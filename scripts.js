// JavaScript for intro scroll effect and circle expansion on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const intro = document.querySelector('.intro');
    const heroHeader = document.querySelector('.hero-header');

    if (scrollY > 0 && !intro.classList.contains('expanded')) {
        intro.classList.add('expanded');

        setTimeout(function() {
            intro.classList.add('hidden');
            heroHeader.style.opacity = '1';
            setTimeout(function() {
                intro.parentNode.removeChild(intro);
                window.scrollTo({
                    top: window.top, // Lock scroll to the hero header
                    behavior: 'smooth' // Instant scroll without smooth behavior
                });
            }, 100); 
        }, 1000); // Delay to allow the expansion to complete before hiding
    }

    // Remove the intro section from the DOM and lock scroll up after scrolling past the intro
    if (scrollY >= window.innerHeight) {
        intro.parentNode.removeChild(intro);

        // Lock scroll up by setting the scroll position to the top of the hero header
        window.scrollTo({
            top: window.top,
            behavior: 'smooth'
        });
    }
});


// JavaScript to handle navigation bar disappearing on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');

    if (scrollY > 100) {
        navbar.style.top = '-100px';
        logo.classList.add('logo-invert'); // Add the logo-invert class
    } else {
        navbar.style.top = '0';
        logo.classList.remove('logo-invert'); // Remove the logo-invert class
    }
});


// JavaScript to refresh the page when the logo is clicked
document.querySelector('.logo').addEventListener('click', function() {
    location.reload();
});
