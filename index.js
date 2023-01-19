// API key for OpenWeatherMap API
const API_KEY = '52f31c0108dd91c4c34f9a8c36d35cba';

// Select elements from the DOM
const cityInput = document.querySelector("#city");
const submitBtn = document.querySelector("#submit");
const weatherDiv = document.querySelector("#weather");

// Add a submit event listener to the form
submitBtn.addEventListener("click", getWeather);

function getWeather(e) {
    e.preventDefault();

    // Get the city input value
    const city = cityInput.value;

    // Fetch weather data from the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            // Extract the relevant data from the API response
            const { main, name } = data;
            const { temp, humidity } = main;

            // Display the weather data in the weatherDiv
            weatherDiv.innerHTML = `
        <p>City: ${name}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
      `;
        })
        .catch(error => {
            console.log(error);
            weatherDiv.innerHTML = "<p>Please Enter City Name.</p>";
        });
}