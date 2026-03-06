async function getWeather(){

let city = document.getElementById("city").value.trim();

if(city === ""){
alert("Enter city name");
return;
}

let apiKey = "0e357b3bb14301efd2cc15e92d471bd5";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);
let data = await response.json();

if(data.cod !== 200){
document.getElementById("result").innerHTML =
"City not found. Try typing Delhi, Mumbai, etc.";
return;
}

document.getElementById("result").innerHTML = `
<p>Temperature: ${data.main.temp} °C</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Weather: ${data.weather[0].description}</p>
`;
}