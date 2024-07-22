document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simple validation
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        alert('Login berhasil!'); // Placeholder action
    } else {
        alert('Harap isi semua field');
    }
});