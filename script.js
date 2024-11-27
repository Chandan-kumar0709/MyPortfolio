// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth',
        });
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        alert('All fields are required!');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert('Please enter a valid email address!');
    } else {
        alert('Message sent successfully!');
        form.reset();
    }
});

// Dark/Light Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.className = 'theme-toggle';
toggleButton.innerHTML = '<i class="fas fa-adjust"></i>';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    toggleButton.classList.toggle('active');
    toggleButton.innerHTML = document.body.classList.contains('light-theme')
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});
