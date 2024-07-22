document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const errorMsg = document.getElementById('errorMsg');

    if (username === '' || password === '') {
        errorMsg.textContent = 'Please fill in all fields.';
    } else {
        errorMsg.textContent = '';
        alert('Login successful!');
        // Here you can add further login logic, like sending data to the server
    }
});