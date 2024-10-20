document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Logic for handling sign-in can go here
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: Log the values to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect to the main page or show a success message
    // window.location.href = 'main.html'; // Uncomment this line to redirect after sign-in
});
