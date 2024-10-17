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

console.log(data);

    }
    catch (error) {
      console.error('Error fetching data', error);
    }}

button.addEventListener('click', getWeather);
