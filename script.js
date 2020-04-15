
var city ="New York"


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=imperial&APPID=b0a37f3a414489ec704977796aa495e8", 
function(data) {
    console.log(data)
    
    var icon = "http://openweathermap.org/img/w/" +data.weather[0].icon + ".png";
    $('.icon').attr('src', icon);
    var temp = Math.floor(data.main.temp);
    $('.temp').append(temp);
    var weather = data.weather[0].main;
    $(".weather").append(weather);

}
);