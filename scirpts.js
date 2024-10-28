document.addEventListener('DOMContentLoaded', function() {
    // Reference to buttons
    const loginButton = document.getElementById('login-button');
    const signInButton = document.getElementById('sign-in-button');
    
    // Add event listeners for buttons
    loginButton.addEventListener('click', () => openPopup('login'));
    signInButton.addEventListener('click', () => openPopup('signIn'));
    
    // Function to open popup and set dynamic content
    function openPopup(feature) {
        const popup = document.getElementById("popup");
        const popupText = document.getElementById("popup-text");
        
        popupText.innerHTML = feature === 'login' ? `
            <h2>User Login</h2>
            <form id="login-form">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="btn">Login</button>
            </form>` : `
            <h2>Create an Account</h2>
            <form id="sign-in-form">
                <div class="form-group">
                    <label for="new-username">Username:</label>
                    <input type="text" id="new-username" name="new-username" required>
                </div>
                <div class="form-group">
                    <label for="new-password">Password:</label>
                    <input type="password" id="new-password" name="new-password" required>
                </div>
                <button type="submit" class="btn">Sign Up</button>
            </form>`;
        
        document.getElementById(feature === 'login' ? 'login-form' : 'sign-in-form')
            .addEventListener('submit', function(e) {
                e.preventDefault();
                feature === 'login' ? loginUser() : signUpUser();
            });

        popup.style.display = "block"; // Show popup
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function loginUser() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert('Login successful!');
            window.location.href = "main structure.html"; // Redirect to the specified file
        } else {
            alert('Invalid username or password.');
        }
    }

    function signUpUser() {
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if an account already exists with the given username
        if (storedUser && storedUser.username === newUsername) {
            alert('Account with this username already exists. Please choose a different username.');
        } else {
            const userData = { username: newUsername, password: newPassword };
            localStorage.setItem('user', JSON.stringify(userData));
            alert('Account created successfully! You can now log in.');
            closePopup();
        }
    }
    
    // Event listener to close the popup on button click or outside click
    document.getElementById('close-popup').addEventListener('click', closePopup);
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById("popup")) closePopup();
    });

    // Ensure popup is hidden on page load
    document.getElementById("popup").style.display = "none";
});
