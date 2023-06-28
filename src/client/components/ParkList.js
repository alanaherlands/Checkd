import { fetchParkData } from './api.js';

async function displayParksInArea(area) {
  const parkData = await fetchParkData(area);

  if (parkData) {
    // Extract relevant park information from parkData and display on the map or in any other way
  } else {
    // Handle error or display a message to the user
  }
}

// Call the function with the desired area
displayParksInArea('your_area_here');