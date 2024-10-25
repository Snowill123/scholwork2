document.addEventListener('DOMContentLoaded', function() {
    // Reference to buttons
    const loginButton = document.getElementById('login-button');
    const signInButton = document.getElementById('sign-in-button');
    const adminButton = document.getElementById('admin-button');
    
    // Add event listeners for buttons
    loginButton.addEventListener('click', function() {
        openPopup('login');
    });

    signInButton.addEventListener('click', function() {
        openPopup('signIn');
    });

    adminButton.addEventListener('click', function() {
        openPopup('admin');
    });

    // Function to open popup and set dynamic content
    function openPopup(feature) {
        var popup = document.getElementById("popup");
        var popupText = document.getElementById("popup-text");
        
        if (feature === 'login') {
            popupText.innerHTML = `
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
                </form>`;
        } else if (feature === 'signIn') {
            popupText.innerHTML = `
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
        } else if (feature === 'admin') {
            popupText.innerHTML = `
            <h2>Admin Access</h2>
            <p>Please log in as an administrator to access this feature.</p>
            <button id="continue-temp" type="button" class="btn">Continue Temporary</button>`;
        }

        popup.style.display = "block"; // Show popup

        // Add event listener to the 'Continue Temporary' button
        const continueButton = document.getElementById('continue-temp');
        if (continueButton) {
            continueButton.addEventListener('click', function() {
                // Redirect to the new page
                window.location.href = 'main structure.html'; // Update with the path to your main page
            });
        }
    }

    // Close popup
    document.getElementById('close-popup').addEventListener('click', closePopup);
    
    function closePopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    }

    // Close the popup if clicked outside the popup content
    window.addEventListener('click', function(event) {
        var popup = document.getElementById("popup");
        if (event.target === popup) {
            closePopup();
        }
    });

    // Fix: Make sure no popup opens on page load
    var popup = document.getElementById("popup");
    popup.style.display = "none";  // Make sure popup is hidden on page load
});
