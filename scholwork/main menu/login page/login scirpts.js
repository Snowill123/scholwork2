document.addEventListener('DOMContentLoaded', function() {
    const adminButton = document.getElementById('admin-button');
    const logo = document.querySelector('.logo');

    // Reveal admin button when logo is clicked 3 times
    let clickCount = 0;
    logo.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 3) {
            adminButton.classList.remove('hidden'); // Reveal the admin button
        }
    });

    // Redirect actions for buttons
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'main menu\log in page\log in page structure.html'; // Redirect to user login page
    });

    document.getElementById('sign-in-button').addEventListener('click', function() {
        window.location.href = 'sign-in.html'; // Redirect to sign-in page
    });

    // Admin Access button action
    adminButton.addEventListener('click', function() {
        window.location.href = 'admin_login.html'; // Admin login page
    });
});
