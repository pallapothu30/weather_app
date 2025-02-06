const button = document.getElementById("search-btn");
const input = document.getElementById("city");

const cityName = document.getElementById("loc");
const cityTime = document.getElementById("time");
const cityTemperature = document.getElementById("temp");
const weatherIcon = document.getElementById("weather-icon");
const weatherCondition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function getData(city) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=0842865d51624f1c9de175748250202&q=${city}&aqi=yes`
        );
        if (!response.ok) {
            throw new Error("City not found");
        }
        return await response.json();
    } catch (error) {
        alert(error.message);
        return null;
    }
}

button.addEventListener("click", async () => {
    const value = input.value;
    if (!value) {
        alert("Please enter a city name.");
        return;
    }
    const result = await getData(value);
    if (!result) return;

    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = `Local Time: ${result.location.localtime}`;
    cityTemperature.innerText = `${result.current.temp_c}°C`;
    weatherIcon.src = result.current.condition.icon;
    weatherCondition.innerText = result.current.condition.text;
    humidity.innerText = `Humidity: ${result.current.humidity}%`;
    wind.innerText = `Wind Speed: ${result.current.wind_kph} km/h`;
});
