const button = document.getElementById('getWeatherButton');

async function getWeather () {
    const response =  await fetch ('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Pittsburgh?unitGroup=metric&key=6MRGX7QE8HMREHVGNPMQWUV6L&contentType=json' , {
   mode: 'cors'})
 .then(function(response) {
  return response.json();
 }
 .then(function(data) {
  console.log(data);
 })
  .catch(function(error){
  console.error('Error fetching data', error);
}))}
button.addEventListener('click', getWeather);
