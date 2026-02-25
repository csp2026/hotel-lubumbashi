// JavaScript functionality for the hotel booking system

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Animations
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value;
    const date = this.bookingDate.value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Assume validateBookingDate is another function that checks the date validity
    if (!validateBookingDate(date)) {
        alert('Please choose a valid booking date.');
        return;
    }
    // Proceed with booking
    alert('Booking successful!');
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Booking System Logic
function bookRoom() {
    // Logic for booking a room
    // This function can include API calls to save booking in the backend
}

// Intersection Observer for Animations
const sections = document.querySelectorAll('.animate-section');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Interactive Features (e.g., room selection)
const roomSelection = document.querySelectorAll('.room-option');
roomSelection.forEach(option => {
    option.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});
