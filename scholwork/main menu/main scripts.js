// Array to hold chat messages, goals, challenges, and affirmations
const messages = [];
const goals = [];
const challenges = [];
const affirmations = [
    "You are capable and strong.",
    "Every day is a new opportunity.",
    "You bring positivity wherever you go.",
    "Believe in your journey.",
    "You are worthy of all the good things in life."
];
let affirmationInterval;

function openPopup(feature) {
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popup-text");
    var chatContainer = document.getElementById("chat-container");
    var goalContainer = document.getElementById("goal-container");
    var myJourneyContainer = document.getElementById("myjourney-container");
    var innerJoyContainer = document.getElementById("innerjoy-container");

    // Clear previous inputs
    document.getElementById("goal-input").value = "";
    document.getElementById("challenge-input").value = "";

    if (feature === 'whisperSpace') {
        popupText.innerHTML = "Welcome to WhisperSpace!";
        chatContainer.style.display = "block";
        goalContainer.style.display = "none";
        myJourneyContainer.style.display = "none";
        innerJoyContainer.style.display = "none";
        renderMessages(); 
        stopAffirmations(); 
    } else if (feature === 'innerJoy') {
        popupText.innerHTML = "InnerJoy: Positive affirmations for you.";
        chatContainer.style.display = "none";
        goalContainer.style.display = "none";
        myJourneyContainer.style.display = "none";
        innerJoyContainer.style.display = "block";
        startAffirmations(); // Start displaying affirmations
    } else if (feature === 'goals') {
        popupText.innerHTML = "Track your goals here!";
        chatContainer.style.display = "none";
        goalContainer.style.display = "block";
        myJourneyContainer.style.display = "none";
        innerJoyContainer.style.display = "none";
        renderGoals();
        stopAffirmations(); 
    } else if (feature === 'myJourney') {
        popupText.innerHTML = "Mindfulness Challenges: Follow your journey!";
        chatContainer.style.display = "none";
        goalContainer.style.display = "none";
        myJourneyContainer.style.display = "block";
        innerJoyContainer.style.display = "none";
        renderChallenges(); 
        stopAffirmations(); 
    }

    popup.style.display = "block"; 
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    stopAffirmations(); 
}

// Function to send a message in WhisperSpace
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messagesDiv = document.getElementById("messages");
    
    if (messageInput.value.trim() !== "") {
        const message = {
            text: messageInput.value,
            timestamp: new Date().toLocaleTimeString()
        };

        messages.push(message); 

        messageInput.value = ""; 
        
        renderMessages();
    }
}

function renderMessages() {
    var messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = ""; 

    messages.forEach((msg) => {
        var messageDiv = document.createElement("div");
        messageDiv.textContent = `${msg.timestamp}: You: ${msg.text}`; 
        messagesDiv.appendChild(messageDiv);
    });

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to add a goal
function addGoal() {
    var goalInput = document.getElementById("goal-input");
    
    if (goalInput.value.trim() !== "") {
        goals.push(goalInput.value); 
        goalInput.value = ""; 
        renderGoals(); 
    }
}

function renderGoals() {
    var goalsDiv = document.getElementById("goals");
    goalsDiv.innerHTML = ""; 

    goals.forEach((goal) => {
        var goalDiv = document.createElement("div");
        goalDiv.textContent = goal; 
        goalsDiv.appendChild(goalDiv);
    });
}

// Function to add a mindfulness challenge
function addChallenge() {
    var challengeInput = document.getElementById("challenge-input");
    
    if (challengeInput.value.trim() !== "") {
        challenges.push(challengeInput.value); 
        challengeInput.value = ""; 
        renderChallenges(); 
    }
}

function renderChallenges() {
    var challengesDiv = document.getElementById("challenges");
    challengesDiv.innerHTML = ""; 

    challenges.forEach((challenge) => {
        var challengeDiv = document.createElement("div");
        challengeDiv.textContent = challenge; 
        challengesDiv.appendChild(challengeDiv);
    });
}

// Start and stop displaying affirmations for InnerJoy
function startAffirmations() {
    var innerJoyContent = document.getElementById("innerjoy-content");
    let index = 0;

    if (affirmationInterval) clearInterval(affirmationInterval);
    innerJoyContent.textContent = affirmations[index];

    affirmationInterval = setInterval(() => {
        index = (index + 1) % affirmations.length;
        innerJoyContent.textContent = affirmations[index];
    }, 5000); // Update every 5 seconds
}

function stopAffirmations() {
    if (affirmationInterval) clearInterval(affirmationInterval);
}
