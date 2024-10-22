document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('locationForm');

  async function getWeather(location = 'Pittsburgh') {
    try {
      const encodedLocation = encodeURIComponent(location.toLowerCase());
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=metric&key=6MRGX7QE8HMREHVGNPMQWUV6L&contentType=json`, {
        mode: 'cors'
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();

      const basicWeather = {
        location: data.resolvedAddress,
        description: data.description,
        currentTemp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        conditions: data.currentConditions.conditions,
      };

      // Update the text content of the div with the fetched data
      const div = document.getElementById('weatherInfo');
      div.textContent = `Today in ${basicWeather.location}, it is ${basicWeather.currentTemp}°C, feeling like ${basicWeather.feelsLike}°C, conditions are ${basicWeather.conditions}.`;

    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const location = document.getElementById('locationInput').value.trim(); // Get user input
    getWeather(location || 'Pittsburgh'); // Fetch weather for user input or default to Pittsburgh if input is empty
  });
});
