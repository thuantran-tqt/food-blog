// Menu Toggle 
// Set variables for menu toggle, nav links and bars 
const menuToggle = document.querySelector('#showMenu');
const navLink = document.querySelector('#navLinks');
const hideBar = document.querySelector('#hideBar');
const barTop = document.querySelector('#barTop');
const barBottom = document.querySelector('#barBottom');

// Show menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        navLink.classList.toggle('show-menu');
        hideBar.classList.toggle('hide-bar');
        barTop.classList.toggle('rotate-bar-top');
        barBottom.classList.toggle('rotate-bar-bottom');
    });
}


// Scroll to top button
// Set a variable for scroll to top button
const scrollToTop = document.querySelector('#scrollButton');

// Set up a function if the window scroll down to height 500px then show button 
window.addEventListener("scroll", () => {

    // Get the current scroll height value
    const windowHeight = window.scrollY;

    // If the scroll height value is greater than the window height, add style inline-css in button 
    if (windowHeight > 500) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});


// Setup a function with animate scroll to top slower / smoother
const animateScroll = () => {

    // Set a variable for the number of pixels from the top of the document.
    const heightScroll = document.documentElement.scrollTop || document.body.scrollTop;

    // If heightScroll value is greater than 0, scroll to top of the document.
    // Animate scroll with method requestAnimationFrame:
    if (heightScroll > 0) {
        window.requestAnimationFrame(animateScroll);

        // ScrollTo takes x and y coordinate.
        // Increase the '15' value to get a smoother/slower scroll
        window.scrollTo(0, heightScroll - heightScroll / 15);
    }
}

// When the button clicked, run animateScroll function
scrollToTop.onclick = function () {
    animateScroll();
}