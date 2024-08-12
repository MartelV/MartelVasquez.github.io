// JavaScript for intro scroll effect
document.querySelector('.intro-circle').addEventListener('click', function() {
    document.querySelector('.intro').style.display = 'none'; // Hide intro section
    document.querySelector('.hero-header').scrollIntoView({ behavior: 'smooth' });
});

// JavaScript to handle navigation bar disappearing on scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (scrollY > 100) { // Adjust the value (100) as needed for when you want the navbar to disappear
        navbar.style.top = '-100px'; // Move the navbar out of view
    } else {
        navbar.style.top = '0'; // Bring the navbar back into view
    }
});

// JavaScript to refresh the page when the logo is clicked
document.querySelector('.logo').addEventListener('click', function() {
    location.reload(); // Refresh the page
});
