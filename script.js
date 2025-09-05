lucide.createIcons();
// JavaScript for form submission and message box
const contactForm = document.getElementById('contact-form');
const messageBox = document.getElementById('message-box');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you would typically send the form data to a server
    // For this example, we'll just simulate a successful submission
    console.log('Form submission simulated.');

    // Show the message box
    messageBox.classList.add('visible');

    // Hide the message box after 3 seconds
    setTimeout(() => {
        messageBox.classList.remove('visible');
    }, 3000);

    // Reset the form fields
    contactForm.reset();
});

// JavaScript for scroll-to-top button
const scrollTopButton = document.getElementById('scroll-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const header = document.getElementById('main-header');
const nav = document.getElementById('main-nav');
const heroSection = document.querySelector('section'); // assumes hero is first section

function onScroll() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    if (window.scrollY > heroBottom - 80) {
        header.classList.add('bg-white', 'shadow-lg');
        header.classList.remove('bg-transparent');
        nav.classList.add('text-black');
        nav.classList.remove('text-white');
        // Update nav link hover for dark text
        nav.querySelectorAll('a').forEach(a => {
            a.classList.remove('hover:bg-white/10');
            a.classList.add('hover:bg-gray-100');
        });
    } else {
        header.classList.remove('bg-white', 'shadow-lg');
        header.classList.add('bg-transparent');
        nav.classList.remove('text-black');
        nav.classList.add('text-white');
        // Update nav link hover for light text
        nav.querySelectorAll('a').forEach(a => {
            a.classList.add('hover:bg-white/10');
            a.classList.remove('hover:bg-gray-100');
        });
    }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', onScroll);