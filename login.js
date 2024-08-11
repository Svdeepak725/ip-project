document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'deepak' && password === 'password') {
        localStorage.setItem('authToken', 'your-auth-token');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});
