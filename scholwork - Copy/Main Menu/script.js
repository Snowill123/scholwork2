// JavaScript to handle splash screen, navigation, and back buttons

document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const guestButton = document.getElementById('guest-button');
    const loginButton = document.getElementById('login-button');
    const backToSplashMain = document.getElementById('back-to-splash');
    const backToSplashAdmin = document.getElementById('back-to-splash-admin');

    // Event listener for "Continue as Guest" button
    guestButton.addEventListener('click', () => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block'; // Show the main content for guests
        window.location.href = 'Main Page/main.html';  // Redirect to main page
    });

    // Event listener for "Admin Login" button
    loginButton.addEventListener('click', () => {
        window.location.href = 'admin.html'; // Redirect to Admin Login page
    });

    // Event listener for "Back" button on the main content page
    if (backToSplashMain) {
        backToSplashMain.addEventListener('click', () => {
            mainContent.style.display = 'none';
            splashScreen.style.display = 'block'; // Return to the splash screen
        });
    }

    // Event listener for "Back" button on the admin login page
    if (backToSplashAdmin) {
        backToSplashAdmin.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect back to the splash screen
        });
    }
});
