
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navContainer = document.querySelector('.nav-container');

    navToggle.addEventListener('click', function() {
        if (navContainer.classList.contains('active')) {
            navContainer.classList.remove('active');
            navToggle.innerHTML = '&#9776;'; // Change back to menu icon
        } else {
            navContainer.classList.add('active');
            navToggle.innerHTML = '&#10006;'; // Change to X icon
        }
    });
});

/*Script pour login*/
const forme = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInpute = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordErrore = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Reset previous errors
    emailError.textContent = '';
    passwordErrore.textContent = '';

    // Validate email
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required';
        isValid = false;
    }

    // Validate password
    if (!passwordInpute.value.trim()) {
        passwordErrore.textContent = 'Password is required';
        isValid = false;
    }

    // Submit the form if everything is valid
    if (isValid) {
        forme.submit();
    }
});
/*Script Signup*/
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const mailInput = document.getElementById('mail');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const mailError = document.getElementById('mailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Reset previous errors
    nameError.textContent = '';
    phoneError.textContent = '';
    mailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Validate name
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    // Validate phone
    if (!phoneInput.value.trim()) {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    }

    // Validate mail
    if (!mailInput.value.trim()) {
        mailError.textContent = 'Email is required';
        isValid = false;
    }

    // Validate password
    if (!passwordInput.value.trim()) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    }

    // Submit the form if everything is valid
    if (isValid) {
        form.submit();
    }
});
/* Sroller*/
// script.js

// Lorsque l'utilisateur fait défiler vers le bas de 20px depuis le haut de la page, afficher le bouton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Lorsque l'utilisateur clique sur le bouton, remonter en haut de la page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
