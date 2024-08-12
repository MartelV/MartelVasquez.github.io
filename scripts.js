// JavaScript to handle logo color change on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / documentHeight;

    // Determine the scroll position and apply appropriate class to body
    if (scrollPercentage >= 0.8) {
        document.body.className = 'scrolled-5';
    } else if (scrollPercentage >= 0.6) {
        document.body.className = 'scrolled-4';
    } else if (scrollPercentage >= 0.4) {
        document.body.className = 'scrolled-3';
    } else if (scrollPercentage >= 0.2) {
        document.body.className = 'scrolled-2';
    } else {
        document.body.className = 'scrolled-1';
    }

    // Handle navigation bar disappearing on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollY > 100) { // Adjust the value (100) as needed for when you want the navbar to disappear
        navbar.style.top = '-100px'; // Move the navbar out of view
    } else {
        navbar.style.top = '0'; // Bring the navbar back into view
    }
});
