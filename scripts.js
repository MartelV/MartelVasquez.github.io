let linkClicked = false; // Flag to track if a navigation link was clicked
let introPlayed = sessionStorage.getItem('introPlayed'); // Check if the intro has been played

// Add event listeners to all navigation links to detect clicks
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        linkClicked = true;
    });
});

if (!introPlayed) {
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const intro = document.querySelector('.intro');
        const heroHeader = document.querySelector('.hero-header');

        if (scrollY > 0 && !intro.classList.contains('expanded')) {
            intro.classList.add('expanded');

            setTimeout(function() {
                intro.classList.add('hidden');
                setTimeout(function() {
                    heroHeader.style.opacity = '1'; // Fade in the header image after intro is hidden
                    intro.parentNode.removeChild(intro);
                    sessionStorage.setItem('introPlayed', 'true'); // Mark the intro as played
                    if (!linkClicked) {
                        window.scrollTo({
                            top: 0, // Scroll to the top of the page
                            behavior: 'smooth' // Smooth scroll to the top
                        });
                    }
                }, 100); 
            }, 1000); // Delay to allow the expansion to complete before hiding
        }
    });
} else {
    // Immediately remove the intro if it has already been played
    const intro = document.querySelector('.intro');
    if (intro) {
        intro.parentNode.removeChild(intro);
    }
}

// Add hover effect for the outline and down arrow
document.addEventListener("DOMContentLoaded", () => {
    const outline = document.querySelector(".outline");

    outline.addEventListener("mouseenter", () => {
        outline.style.width = "200px";  // Increase width on hover
        outline.style.height = "200px"; // Increase height on hover
        outline.style.borderWidth = "5px"; // Increase border width
        outline.style.transition = "width 0.5s ease, height 0.5s ease, border-width 0.5s ease"; // Smooth transition for all properties
    });

    outline.addEventListener("mouseleave", () => {
        outline.style.width = "140px";  // Reset width when not hovering
        outline.style.height = "140px"; // Reset height when not hovering
        outline.style.borderWidth = "3px"; // Reset border width
        outline.style.transition = "width 0.5s ease, height 0.5s ease, border-width 0.5s ease"; // Smooth transition for all properties
    });
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

// JavaScript code for handling the in-view class application with a delay
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const projectSection = document.querySelector('.project-section');
    const contactSection = document.querySelector('#contact'); 

    // Check if the About section is in view with a delay
    if (isInView(aboutSection, 0.50)) { // 50% of the section must be in view
        aboutSection.classList.add('in-view');
    } else {
        aboutSection.classList.remove('in-view');
    }

    // Check if the Projects section is in view with a delay
    if (isInView(projectSection, 0.50)) { // 50% of the section must be in view
        projectSection.classList.add('in-view');
    } else {
        projectSection.classList.remove('in-view');
    }

    // Check if the Contact section is in view
    if (isInView(contactSection, 0.50)) { // 50% of the section must be in view
        contactSection.classList.add('in-view');
    } else {
        contactSection.classList.remove('in-view');
    }
});

// Function to check if a section is in view with a threshold
function isInView(element, threshold = 0.5) { // Default threshold is 50%
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;

    return (
        rect.top + elementHeight * threshold < window.innerHeight &&
        rect.bottom - elementHeight * threshold >= 0
    );
}

// JavaScript to refresh the page when the logo is clicked
document.querySelector('.logo').addEventListener('click', function() {
    location.reload();
});

document.addEventListener('DOMContentLoaded', function() {
    const heroHeader = document.querySelector('.hero-header');
    const introPlayed = sessionStorage.getItem('introPlayed') === 'true';

    if (introPlayed) {
        // If intro has been played, ensure heroHeader is visible
        heroHeader.classList.add('visible');
    } else {
        // If intro has not been played, initially hide heroHeader
        heroHeader.style.opacity = '0'; // Ensure header is hidden initially
    }
});