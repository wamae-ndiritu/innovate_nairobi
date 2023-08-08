// Get HTML elements
const emergencyCallButton = document.getElementById('emergencyCallButton');
const panicButton = document.getElementById('panicButton');
const locationStatus = document.getElementById('locationStatus');
const mapContainer = document.getElementById('mapContainer');
const map = document.getElementById('map');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');

// Simulated location tracking
function trackLocation() {
    // Simulate fetching user's location
    setTimeout(() => {
        locationStatus.textContent = 'Location Tracked: Latitude 40.7128, Longitude -74.0060';
    }, 2000);
}

// Simulated emergency call
emergencyCallButton.addEventListener('click', () => {
    alert('Emergency call initiated. Help is on the way!');
});

// Simulated panic button
panicButton.addEventListener('click', () => {
    alert('Panic button activated. Stay calm, help is coming!');
});

// Simulated chat support
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
});

// Initialize Google Maps (for demonstration purposes)
function initMap() {
    const userLocation = { lat: 40.7128, lng: -74.0060 }; // Default location (New York City)
    const googleMap = new google.maps.Map(map, {
        center: userLocation,
        zoom: 10
    });
    const marker = new google.maps.Marker({
        position: userLocation,
        map: googleMap,
        title: 'Your Location'
    });
}

// Simulate loading Google Maps script
window.addEventListener('load', () => {
    setTimeout(() => {
        trackLocation();
        initMap();
    }, 1000);
});
