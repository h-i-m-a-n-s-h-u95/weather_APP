
document.getElementById("btn").addEventListener("click", getWeather);

function getWeather(){

const place = document.getElementById("location").value;

const url = `https://api.weatherapi.com/v1/current.json?key=d0f6ba70513b47b38e695124260603&q=${place}&aqi=yes`;

fetch(url)

.then(res => res.json())

.then(data => {

document.getElementById("city").innerText =
data.location.name + ", " + data.location.country;

document.getElementById("temp").innerText =
data.current.temp_c + " °C";

document.getElementById("feels").innerText =
data.current.feelslike_c + " °C";

document.getElementById("humidity").innerText =
data.current.humidity + " %";

document.getElementById("wind").innerText =
data.current.wind_kph + " km/h";

document.getElementById("condition").innerText =
data.current.condition.text;

document.getElementById("icon").src =
"https:" + data.current.condition.icon;

});

}