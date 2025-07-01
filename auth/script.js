document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    // Toggle forms
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        clearErrors();
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
        clearErrors();
    });

    // Clear all error messages
    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.getElementById('login-error').textContent = '';
        document.getElementById('register-error').textContent = '';
    }

    // Validate email format
    function isValidEmail(email) {
        const re = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(email);
    }

    // Register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const email = registerForm['email'].value.trim();
        const password = registerForm['password'].value;
        const passwordConfirm = registerForm['passwordConfirm'].value;

        let valid = true;

        if (!isValidEmail(email)) {
            setError('register-email', 'Invalid email format');
            valid = false;
        }

        if (password.length < 6) {
            setError('register-password', 'Password must be at least 6 characters');
            valid = false;
        }

        if (password !== passwordConfirm) {
            setError('register-password-confirm', 'Passwords do not match');
            valid = false;
        }

        if (valid) {
            // Check if user already exists
            if (localStorage.getItem(email)) {
                document.getElementById('register-error').textContent = 'User already exists';
            } else {
                // Save user to localStorage
                localStorage.setItem(email, password);
                alert('Registration successful! You can now log in.');
                registerForm.reset();
                registerForm.classList.remove('active');
                loginForm.classList.add('active');
            }
        }
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const email = loginForm['email'].value.trim();
        const password = loginForm['password'].value;

        let valid = true;

        if (!isValidEmail(email)) {
            setError('login-email', 'Invalid email format');
            valid = false;
        }

        if (password.length === 0) {
            setError('login-password', 'Password is required');
            valid = false;
        }

        if (valid) {
            const storedPassword = localStorage.getItem(email);
            if (!storedPassword) {
                document.getElementById('login-error').textContent = 'User does not exist';
            } else if (storedPassword !== password) {
                document.getElementById('login-error').textContent = 'Incorrect password';
            } else {
                alert('Login successful!');
                loginForm.reset();
            }
        }
    });

    // Set error message for input
    function setError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorMessage = input.nextElementSibling;
        if (errorMessage) {
            errorMessage.textContent = message;
        }
    }
});
