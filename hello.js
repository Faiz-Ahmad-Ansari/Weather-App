function test() {
    
var cityInput = document.getElementById("cityInput").value;
console.log(cityInput);
var cityNameInUrl = cityInput;

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+ cityNameInUrl +'&APPID=7889cd0d3c3873c19c1738917c7b33d1&units=metric');
ourRequest.onload=function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData); 
};
ourRequest.send();

function renderHTML(data) {
    var city = document.getElementById("city");
    var cityName = data.name;
    city.innerHTML = " " + cityName;
//Temperature
    var temp = document.getElementById("temp");
    var temperature = data.main.temp;
    var deg = "o";
    temp.innerHTML = " " + temperature + deg.sup() + "C";
//description
    var desc = document.getElementById("description");
    var description = data.weather[0].description;
    desc.innerHTML = " "+ description;
//Humidity
    var humid = document.getElementById("humidity");
    var humidity = data.main.humidity;
    humid.innerHTML = " "+ humidity+"%";
// Wind Speed
    var wind = document.getElementById("wind");
    var windSpeed =  data.wind.speed;
    wind.innerHTML= " "+ windSpeed +" "+"m/s";
// Clouds
    var clds = document.getElementById("clouds");
    var clouds = data.clouds.all;
    clds.innerHTML = " "+clouds+"%";
//Coord Long & Lat
    var Coord1 = document.getElementById("coordLong");
    var coordLong = data.coord.lon;
    Coord1.innerHTML =" "+coordLong+" "+"/";
    
    var coord2 = document.getElementById("coordLat");
    var coordLat = data.coord.lat;
    coord2.innerHTML = " "+coordLat;

    weatherIcon(data);
    }
    function weatherIcon(data) {
        var imgElement = document.createElement("IMG");
        var icon = data.weather[0].icon;
        imgElement.setAttribute('src','https://openweathermap.org/img/wn/'+icon+'@2x.png');
        imgElement.setAttribute('width','300');
        imgElement.setAttribute('height','250');
        document.body.appendChild(imgElement);
    }

    }
