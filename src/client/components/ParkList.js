import L from 'leaflet';

// Create a map instance
const map = L.map('map');

// Fetch the user's current location
try {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      
      // Set the initial map view using the user's location
      map.setView([latitude, longitude], 13);
      
      // Add a tile layer from OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors',
      }).addTo(map);
      
      // Fetch nearby parks and display them on the map
      await fetchNearbyParks(latitude, longitude);
    },
    (error) => {
      console.error('Error retrieving user location:', error);
    }
  );
} catch (error) {
  console.error('Error retrieving user location:', error);
}

// Function to fetch nearby parks
async function fetchNearbyParks(latitude, longitude) {
  try {
    // Use the latitude and longitude to fetch nearby parks from the API
    const response = await fetch(`API_ENDPOINT?lat=${latitude}&lon=${longitude}`);
    
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Failed to fetch nearby parks');
    }
    
    // Parse the response data
    const data = await response.json();
    
    // Process the data and display the parks on the map
    // ...
  } catch (error) {
    console.error('Error fetching nearby parks:', error);
  }
}