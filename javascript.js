const apiURL = "https://api.openweathermap.org/data/2.5/weather?&appid=74a462ac2e8bec8069440e01d55cb93d&units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function fetchWeather(city) {
    const response = await fetch(apiURL+city);
    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    document.querySelector(".error").style.display = "none";

    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
    weatherIcon.src =`images/${data.weather[0].main}.png`
    weatherIcon.alt = data.weather[0].description;
    document.querySelector(".weather").style.display = "block";

}
searchBtn.addEventListener("click", () => {
    if (searchBox.value == "") {
        alert("Please enter a city name");
    }    
    else {
        fetchWeather(searchBox.value);
    };
});
