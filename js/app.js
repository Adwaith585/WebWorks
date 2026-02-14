// Custom Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline delay effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor Interactions
const linkElements = document.querySelectorAll('a, button, input, select');
linkElements.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

mobileBtn.addEventListener('click', () => {
    // Simple toggle implementation for mobile
    // Specific mobile drawer styles would usually go here or class toggling
    if (navList.style.display === 'flex') {
        navList.style.display = 'none';
        navList.style.position = 'static';
        navList.style.flexDirection = 'row';
        navList.style.background = 'transparent';
        navList.style.height = 'auto';
        navList.style.width = 'auto';
    } else {
        navList.style.display = 'flex';
        navList.style.position = 'absolute';
        navList.style.top = '100%';
        navList.style.left = '0';
        navList.style.flexDirection = 'column';
        navList.style.background = '#0a0a0a';
        navList.style.width = '100%';
        navList.style.padding = '20px';
        navList.style.borderBottom = '1px solid #2a2a2a';
    }
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (window.innerWidth <= 768 && navList.style.display === 'flex') {
             navList.style.display = 'none';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // You would add CSS for .visible handles
        }
    });
}, observerOptions);

// For future expansion of scroll animations
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
