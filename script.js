console.log('Script loaded!');

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

console.log('Menu button:', menuBtn);
console.log('Mobile menu:', mobileMenu);

menuBtn.addEventListener('click', () => {
    console.log('Button clicked!');
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});