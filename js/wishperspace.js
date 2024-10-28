// Array to hold chat messages
const messages = [];

// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messagesDiv = document.getElementById("messages");
    
    if (messageInput.value.trim() !== "") {
        const message = {
            text: messageInput.value,
            timestamp: new Date().toLocaleTimeString(),
            user: 'You' // Assuming the sender is the user
        };

        messages.push(message); // Store the message in the array
        messageInput.value = ""; // Clear the input
        renderMessages(); // Update the messages display
    }
}

// Function to render messages in the chat window
function renderMessages() {
    var messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = ""; // Clear the display

    messages.forEach((msg) => {
        var messageDiv = document.createElement("div");
        messageDiv.textContent = `${msg.timestamp} - ${msg.user}: ${msg.text}`; // Format the message
        messagesDiv.appendChild(messageDiv); // Append message to the chat
    });

    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the latest message
}
