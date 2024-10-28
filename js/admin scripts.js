// Chat messages storage
const messages = JSON.parse(localStorage.getItem('messages')) || [];

function loadMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = ''; 

    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${msg.timestamp} - ${msg.user}: ${msg.text}`;
        messagesDiv.appendChild(messageDiv);
    });
}

// Save message to local storage and re-render
function saveAndRenderMessages() {
    localStorage.setItem('messages', JSON.stringify(messages));
    loadMessages();
}

// Admin sends a message
function sendAdminMessage() {
    const adminMessageInput = document.getElementById('admin-message-input');
    if (adminMessageInput.value.trim() !== '') {
        const message = {
            text: adminMessageInput.value,
            timestamp: new Date().toLocaleTimeString(),
            user: 'Admin'
        };
        messages.push(message);
        adminMessageInput.value = '';
        saveAndRenderMessages();
    }
}

loadMessages();
