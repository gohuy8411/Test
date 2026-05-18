// ==================== HAMBURGER MENU ==================== //
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==================== CONTACT FORM ==================== //
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
    const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
    const message = formData.get('message') || contactForm.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !message) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Vui lòng nhập email hợp lệ!');
        return;
    }
    
    // Show success message
    alert('Cảm ơn bạn! Tin nhắn của bạn đã được gửi. Tôi sẽ liên hệ lại với bạn sớm.');
    
    // Reset form
    contactForm.reset();
});

// ==================== SCROLL ANIMATIONS ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ==================== SMOOTH SCROLL FOR NAVIGATION ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== NAVBAR BACKGROUND ON SCROLL ==================== //
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== ACTIVE NAV LINK ==================== //
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-color)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ==================== TYPING ANIMATION (Optional) ==================== //
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerText = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            heroTitle.innerText += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    // Uncomment the line below to enable typing animation
    // type();
}

// ==================== COUNTER ANIMATION (Optional) ==================== //
function countUp(element, target, duration = 2000) {
    const start = 0;
    const range = target - start;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.innerText = target;
            clearInterval(timer);
        } else {
            element.innerText = Math.floor(current);
        }
    }, 16);
}

// ==================== PAGE LOAD ANIMATION ==================== //
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
setTimeout(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
}, 100);

// ==================== DARK MODE TOGGLE (Optional) ==================== //
// Uncomment to enable dark mode feature
/*
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
*/

console.log('Portfolio script loaded successfully!');
