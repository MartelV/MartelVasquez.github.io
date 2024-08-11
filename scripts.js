// Hide the navbar on scroll down, show on scroll up
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down - hide navbar
        navbar.style.top = "-60px";
    } else {
        // Scroll up - show navbar
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
