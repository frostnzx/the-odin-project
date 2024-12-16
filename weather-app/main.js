async function fetchWeather(location) {
    const weatherApiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + 
                           location + "?key=" + "V27Y9V93HJQABLNTCZ23LXN3N" ; 
    const response = await fetch(weatherApiUrl) ;
    const data = await response.json();
    console.log(data);
    return data;
}
async function getWeather() {
    const location = getQueryDOM();
    try {
        const data = await fetchWeather(location);
        const currentWeather = {
            address : data.resolvedAddress ,
            weather: data.currentConditions.conditions ,
            temp :  data.currentConditions.temp , 
            humidity : data.currentConditions.humidity , 
            wind :  data.currentConditions.windspeed 
        }
        displayDOM(currentWeather);
    } catch (error){
        alert(error);
    }
}
function displayDOM(weather) {
    const infoHeader = document.querySelector(".info-header");
    infoHeader.innerHTML = weather.address ;

    const infoWeather = document.querySelector(".info-weather");
    infoWeather.innerHTML = "Weather : " + weather.weather ; 

    const infoTemp = document.querySelector(".info-temp");
    infoTemp.innerHTML = "Temperature : " + weather.temp ; 

    const infoHumid = document.querySelector(".info-humidity");
    infoHumid.innerHTML = "Humidity : " + weather.humidity ; 

    const infoWind = document.querySelector(".info-wind");
    infoWind.innerHTML = "Wind speed : " + weather.wind ; 
}
function getQueryDOM() {
    const queryField = document.querySelector("#query-field");
    return queryField.value ; 
}


function init() {
    const submitBtn = document.querySelector("#submit-btn");
    submitBtn.addEventListener("click" , (event) => {
        event.preventDefault();
        getWeather();
    })
}
init();
