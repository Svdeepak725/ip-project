window.addEventListener('load', () => {
    const authToken = localStorage.getItem('authToken');

    // Redirect to login page if not authenticated
    if (!authToken) {
        window.location.href = './login.html';
    }
});
