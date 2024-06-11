
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

//SignUp//
document.addEventListener('DOMContentLoaded', function () {
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

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        // Reset previous errors
        nameError.textContent = '';
        phoneError.textContent = '';
        mailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        // Validate name
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else if (!nameRegex.test(nameInput.value.trim())) {
            nameError.textContent = 'Name must not contain numbers';
            isValid = false;
        }

        // Validate phone
        const phoneRegex = /^\d{8,11}$/;
        if (!phoneInput.value.trim()) {
            phoneError.textContent = 'Phone number is required';
            isValid = false;
        } else if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Phone number must be between 8 and 11 digits';
            isValid = false;
        }

        // Validate mail
        if (!mailInput.value.trim()) {
            mailError.textContent = 'Email is required';
            isValid = false;
        }

        // Validate password
        const password = passwordInput.value.trim();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password) {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
            isValid = false;
        }

        // Validate confirm password
        const confirmPassword = confirmPasswordInput.value.trim();
        if (confirmPassword !== password) {
            confirmPasswordError.textContent = 'Passwords do not match';
            isValid = false;
        }

        // Prevent form submission if not valid
        if (!isValid) {
            return false;
        }

        // If everything is valid, you can proceed with form submission (uncomment below line)
        // form.submit();
        alert('Form submitted successfully!');
    });
});
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
