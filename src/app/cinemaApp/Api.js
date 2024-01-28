// api/cinemaApi.js

import axios from 'axios';

const cinemaApi = async () => {
  try {
    const response = await axios.get('https://api.collectapi.com/watching/moviesPlaying', {
      headers: {
        "authorization": "apikey 7AoyvUe8KHg9AhrjGlsJ4Y:3o4eCzUZsAhwJPhDtE3cYR",
        "content-type": "application/json",
      },
    });
    
    return response.data.result;
    
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default cinemaApi;
