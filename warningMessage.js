const warningMessage = document.getElementById('warning-message');
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', () => {
    warningMessage.style.display = 'none'; // Hide the message on click
});
