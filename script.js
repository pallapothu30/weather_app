/*
Steps - 
1.Get elements button, input ele through DOM manipulation.
2.add eventlistner on search button to print weather details about city.
3.create elements dynamically to display weather data of city.
*/

const button = document.getElementById("search-btn")
const input = document.getElementById("city")

const cityName = document.getElementById("loc");
const cityTime = document.getElementById("time");
const cityTemprature = document.getElementById("temp")



async function getData(cityName) {
    // through string interpolation
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=0842865d51624f1c9de175748250202&q=${cityName}&aqi=yes`
    );
    return await response.json();
}

button.addEventListener('click',async ()=>{
    const value = input.value;
    if(!value){
        console.warn("please enter a city name.")
    }
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`; 

    cityTime.innerText = `${result.location.localtime}`;
    cityTemprature.innerText = `${result.current.temp_c}`;
})
