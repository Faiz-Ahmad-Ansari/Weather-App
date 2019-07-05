function test() {
    
var cityInput = document.getElementById("cityInput").value;
console.log(cityInput);
var cityNameInUrl = cityInput;

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+ cityNameInUrl +'&APPID=7889cd0d3c3873c19c1738917c7b33d1&units=metric');
ourRequest.onload=function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData); 
};
ourRequest.send();

function renderHTML(data) {
    var city = document.getElementById("city");
    var cityName = data.name;
    city.innerHTML = " " + cityName;

    var temp = document.getElementById("temp");
    var temperature = data.main.temp;
    temp.innerHTML = " " + temperature;

    }
}