const apikey = "e0d656df6da14e66661fee8cb19f40f4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchinp = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "icons/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "icons/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "icons/rain.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "icons/mist.png";
    }
}

searchbtn.addEventListener("click", function(){
    checkWeather(searchinp.value);
})