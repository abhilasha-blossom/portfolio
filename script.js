// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = '☀️';
} else {
    themeToggle.innerText = '🌙';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerText = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerText = '🌙';
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
        scrollTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollTopBtn.classList.remove('show');
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
