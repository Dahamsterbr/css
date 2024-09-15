document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme on load
    if (currentTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        document.querySelectorAll('.card').forEach(card => card.classList.add('dark-mode'));
        document.querySelectorAll('.table').forEach(table => table.classList.add('dark-mode'));
        document.querySelectorAll('.btn-outline-secondary').forEach(btn => btn.classList.add('dark-mode'));
        document.querySelector('main').classList.add('dark-mode'); // Apply dark mode to main element
        themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>'; // Change icon to sun
        localStorage.setItem('theme', 'dark');
    }

    function enableLightMode() {
        document.body.classList.remove('dark-mode');
        document.querySelector('.navbar').classList.remove('dark-mode');
        document.querySelectorAll('.card').forEach(card => card.classList.remove('dark-mode'));
        document.querySelectorAll('.table').forEach(table => table.classList.remove('dark-mode'));
        document.querySelectorAll('.btn-outline-secondary').forEach(btn => btn.classList.remove('dark-mode'));
        document.querySelector('main').classList.remove('dark-mode'); // Remove dark mode from main element
        themeToggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Change icon to moon
        localStorage.setItem('theme', 'light');
    }
});
