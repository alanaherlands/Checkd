import axios from 'axios';

export async function fetchParkData(area) {
  const overpassQuery = `your_overpass_query_here`;

  try {
    const response = await axios.get(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`);
    const parkData = response.data;
    return parkData;
  } catch (error) {
    console.error('Error fetching park data:', error);
    return null;
  }
}