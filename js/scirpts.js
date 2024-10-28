document.addEventListener('DOMContentLoaded', function() {
    const adminCredentials = {
        username: 'adminUser',
        password: 'adminPassword123'
    };

    const loginButton = document.getElementById('login-button');
    const signInButton = document.getElementById('sign-in-button');
    const adminButton = document.getElementById('admin-button');

    loginButton.addEventListener('click', () => openPopup('login'));
    signInButton.addEventListener('click', () => openPopup('signIn'));
    adminButton.addEventListener('click', () => openPopup('admin'));

    function openPopup(feature) {
        const popup = document.getElementById("popup");
        const popupText = document.getElementById("popup-text");

        let formContent;
        if (feature === 'login') {
            formContent = `
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
            formContent = `
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
            formContent = `
                <h2>Admin Login</h2>
                <form id="admin-login-form">
                    <div class="form-group">
                        <label for="admin-username">Username:</label>
                        <input type="text" id="admin-username" name="admin-username" required>
                    </div>
                    <div class="form-group">
                        <label for="admin-password">Password:</label>
                        <input type="password" id="admin-password" name="admin-password" required>
                    </div>
                    <button type="submit" class="btn">Login</button>
                </form>`;
        }

        popupText.innerHTML = formContent;
        popup.style.display = "block";

        const form = document.querySelector(`#${feature === 'admin' ? 'admin-login-form' : feature === 'login' ? 'login-form' : 'sign-in-form'}`);
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (feature === 'admin') {
                loginAdmin();
            } else {
                feature === 'login' ? loginUser() : signUpUser();
            }
        });
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function loginUser() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert('User login successful!');
            window.location.href = "main structure.html";
        } else {
            alert('Invalid username or password.');
        }
    }

    function loginAdmin() {
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        if (username === adminCredentials.username && password === adminCredentials.password) {
            alert('Admin login successful!');
            window.location.href = "admin.html";
        } else {
            alert('Invalid admin username or password.');
        }
    }

    function signUpUser() {
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === newUsername) {
            alert('Account with this username already exists. Please choose a different username.');
        } else {
            const userData = { username: newUsername, password: newPassword };
            localStorage.setItem('user', JSON.stringify(userData));
            alert('Account created successfully! You can now log in.');
            closePopup();
        }
    }

    document.getElementById('close-popup').addEventListener('click', closePopup);
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById("popup")) closePopup();
    });

    document.getElementById("popup").style.display = "none";
});
