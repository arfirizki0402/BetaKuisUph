document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Hide all error messages initially
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    // Validate inputs
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    let valid = true;

    if (username === '') {
        document.getElementById('username-error').style.display = 'block';
        valid = false;
    }

    if (password === '') {
        document.getElementById('password-error').style.display = 'block';
        valid = false;
    }

    if (valid) {
        // Perform login action, e.g., send data to server
        alert('Login berhasil!'); // Placeholder action
    }
});