document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your logic to authenticate the user
    // For example, you can send a request to your server for verification

    console.log(`Username: ${username}, Password: ${password}`); // For testing purposes
    // Redirect or show an error message based on authentication
});
