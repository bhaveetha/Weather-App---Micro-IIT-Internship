// script.js

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found or API error");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById("weather-result").innerHTML = <p>Error: ${error.message}</p>;
  }
}

function displayWeather(data) {
  const { name, main, wind, weather } = data;
  const weatherHtml = `
    <h2>${name}</h2>
    <p><strong>Temperature:</strong> ${main.temp} °C</p>
    <p><strong>Humidity:</strong> ${main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    <p><strong>Condition:</strong> ${weather[0].description}</p>
  `;
  document.getElementById("weather-result").innerHTML = weatherHtml;
}