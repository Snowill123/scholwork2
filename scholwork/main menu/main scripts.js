function openPopup(feature) {
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popup-text");
    
    if (feature === 'whisperSpace') {
        popupText.innerHTML = "Welcome to WhisperSpace!";
    } else if (feature === 'innerJoy') {
        popupText.innerHTML = "InnerJoy: Your personal space for happiness.";
    } else if (feature === 'goals') {
        popupText.innerHTML = "Track your goals here!";
    } else if (feature === 'myJourney') {
        popupText.innerHTML = "Document your journey here!";
    }

    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}