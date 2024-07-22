document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const errorMsg = document.getElementById('errorMsg');

    if (username === '' || password === '' || email === '') {
        errorMsg.textContent = 'Please fill in all fields.';
    } else if (!validateEmail(email)) {
        errorMsg.textContent = 'Please enter a valid email address.';
    } else {
        errorMsg.textContent = '';
        alert('Login successful!');
        // Here you can add further login logic, like sending data to the server
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
