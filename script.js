document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const container = document.getElementById('container');
    const usernameBox = document.getElementById('usernameBox');
    const passwordBox = document.getElementById('passwordBox');

    usernameInput.addEventListener('focus', function() {
        usernameBox.classList.add('user-box-focused');
        container.classList.add('blur-background');
    });

    passwordInput.addEventListener('focus', function() {
        passwordBox.classList.add('user-box-focused');
        container.classList.add('blur-background');
    });

    usernameInput.addEventListener('blur', function() {
        usernameBox.classList.remove('user-box-focused');
        container.classList.remove('blur-background');
    });

    passwordInput.addEventListener('blur', function() {
        passwordBox.classList.remove('user-box-focused');
        container.classList.remove('blur-background');
    });
});