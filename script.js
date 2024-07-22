function validateUsername() {
    const usernameInput = document.getElementById('username').value;
    const usernameGroup = document.getElementById('usernameGroup');
    const passwordGroup = document.getElementById('passwordGroup');
    
    // Simple validation for demonstration (replace with actual logic)
    if (usernameInput.trim() !== "") {
        usernameGroup.classList.add('hidden');
        passwordGroup.classList.remove('hidden');
    } else {
        alert('Please enter a valid username.');
    }
}
