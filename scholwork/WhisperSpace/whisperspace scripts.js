// Select the necessary elements
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Event listener for the send button
sendBtn.addEventListener('click', function() {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        // Display user's message
        appendMessage('user', userMessage);
        
        // Simulate a bot response (this can be connected to a backend later)
        setTimeout(function() {
            const botMessage = getBotResponse(userMessage);
            appendMessage('bot', botMessage);
        }, 1000); // 1 second delay for realism
    }
    messageInput.value = ''; // Clear input field
});

// Append message to the chat box
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    if (sender === 'user') {
        messageElement.classList.add('user-message');
    } else {
        messageElement.classList.add('bot-message');
    }
    
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    
    // Scroll chat box to the bottom when new message appears
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple bot response logic (for now, it returns generic responses)
function getBotResponse(userMessage) {
    // Basic responses for demo purposes
    const responses = [
        "I'm here to help you.",
        "Can you tell me more about how you're feeling?",
        "It's okay to feel like that.",
        "I'm listening. What else would you like to share?",
        "Let's work through this together."
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
}
