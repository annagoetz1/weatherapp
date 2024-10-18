const button = document.getElementById('getWeatherButton');

async function getWeather () {
  try{
    const response =  await fetch ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Pittsburgh?unitGroup=metric&key=6MRGX7QE8HMREHVGNPMQWUV6L&contentType=json' , {
   mode: 'cors'});
       // Check if the response is OK (status 200-299)
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

// Log the basic weather information
console.log(basicWeather);


    }
    catch (error) {
      console.error('Error fetching data', error);
    }}


button.addEventListener('click', getWeather);

const div = document.getElementById('weatherInfo');
div.textContent = 'Today in ${basicWeather.location}, it is ${basicWeather.currentTemp}, feeling like ${basicWeather.feelsLike}, with ${basicWeather.conditions}. ';
