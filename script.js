// Bubble effect
const bubbleContainer = document.querySelector('.bubble-container');
function createBubble() {
    if (window.innerWidth <= 768 && document.querySelectorAll('.bubble').length > 5) return;
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 40 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
    bubbleContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 10000);
}
setInterval(createBubble, 500);

// Typed.js initialization
new Typed('#typed-text', {
    strings: ['Lập trình viên', 'Người yêu âm nhạc', 'Người sáng tạo', 'Người thích Manga, Anime'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// AOS initialization
AOS.init({
    duration: 1000,
    once: true
});

// Slide-down navigation effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const sectionContent = targetElement.querySelector('.section-content');
        if (sectionContent) {
            sectionContent.classList.remove('slide-down');
            sectionContent.style.opacity = '0';
            sectionContent.style.transform = 'translateY(-50px)';
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                sectionContent.classList.add('slide-down');
                sectionContent.style.opacity = '1';
                sectionContent.style.transform = 'translateY(0)';
            }, 100);
        }
    });
});

// Scroll-to-top button
document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
    const isExpanded = navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
});