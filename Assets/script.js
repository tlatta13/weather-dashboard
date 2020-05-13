// History sidebar
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

// Add searches to history sidebar array
function displayHistory () {
    $("#history").empty();

    for (var i = 0; i < searchHistory.length; i++) {
        $("#history").prepend($("<button class='city-history'>").text(searchHistory[i]));
    }
}

// Save searches to sidebar
$("form").on("submit", function(event) {
    event.preventDefault();
    
    var newCity = $("#citySearch").val().trim();
    searchHistory.push(newCity);
    
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    $("#citySearch").val("");
    displayHistory();
});
    
    
// Display current weater on search
function displayWeather() {

    var city = $("#citySearch").val().trim();
    
    // Current Weather
    var currentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1676bf31a729a27d97e9612112df0899";
    
    $(".weather").empty();
    // Request current weather data via API through query url
    $.ajax({
        url: currentURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
        // Current Weather Display Elements
        var displayBox = $("<div>");
        // Show temp
        displayBox.append($("<h3>").text("Current weather in " + response.name + ":"));
        // Current temp
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        displayBox.append($("<h4>").text("Temperature (F): " + tempF.toFixed(2)));
        // Show humidity
        displayBox.append($("<h4>").text("Humidity: " + response.main.humidity + " %"));
        // Show wind speed
        displayBox.append($("<h4>").text("Wind Speed: " + response.wind.speed + " MPH"));
        // Display UV Index
        // $.ajax({
        // url: "https://api.openweathermap.org/data/2.5/uvi?appid=1676bf31a729a27d97e9612112df0899&" + "lat=" + response.coord.lat + "&" + "lon=" + response.coord.lon,
        // method: "GET"
        // }).then(function(UV) {
        //         displayBox.append($("<h4>").text("Wind Speed " + UV.wind.speed + " MPH"));
        //     });
        // });
        
        // Append div.weather            
        $(".weather").append(displayBox);
    });

    // Forecast Weather
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=1676bf31a729a27d97e9612112df0899";
    
    $(".fiveDayForecast").empty();
    
    // Request current weather data via API through query url
    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function(responses) {
        console.log(responses);
        
        // Forecast Weather Day 1 Display Elements      
        var forecastBox1 = $("<div class='card col-md-2 forecast'>");
        // Forecast date day 1
        forecastBox1.append($("<p class='days-date'>").text(responses.list[6].dt_txt));
        // Forecast Icon day 1
        var iconCode1 = responses.list[6].weather[0].icon;
        var iconURL1 = "https://openweathermap.org/img/wn/" + iconCode1 + ".png";
        forecastBox1.append($("<img>").attr("src", iconURL1));
        // Forecast Temp day 1
        var tempF = (responses.list[6].main.temp - 273.15) * 1.80 + 32;
        forecastBox1.append($("<p class='days'>").text("Temp (F): " + tempF.toFixed(2)));
        // Forecast Humidity day 1
        forecastBox1.append($("<p class='days'>").text("Humidity: " + responses.list[6].main.humidity + "%"));
        // Append forecast div
        $(".fiveDayForecast").append(forecastBox1);

        // Forecast Weather Day 2 Display Elements      
        var forecastBox2 = $("<div class='card col-md-2 forecast'>");
        // Forecast date day 2
        forecastBox2.append($("<p class='days-date'>").text(responses.list[14].dt_txt));
        
        // Forecast Icon day 2
        var iconCode2 = responses.list[14].weather[0].icon;
        var iconURL2 = "https://openweathermap.org/img/wn/" + iconCode2 + ".png";
        forecastBox2.append($("<img>").attr("src", iconURL2));
        
        // Forecast Temp day 2
        var tempF = (responses.list[14].main.temp - 273.15) * 1.80 + 32;
        forecastBox2.append($("<p class='days'>").text("Temp (F): " + tempF.toFixed(2)));
        // Forecast Humidity day 2
        forecastBox2.append($("<p class='days'>").text("Humidity: " + responses.list[14].main.humidity + "%"));
        // Append forecast div
        $(".fiveDayForecast").append(forecastBox2);

        // Forecast Weather Day 3 Display Elements      
        var forecastBox3 = $("<div class='card col-md-2 forecast'>");
        // Forecast date day 3
        forecastBox3.append($("<p class='days-date'>").text(responses.list[22].dt_txt));
        // Forecast Icon day 3
        var iconCode3 = responses.list[22].weather[0].icon;
        var iconURL3 = "https://openweathermap.org/img/wn/" + iconCode3 + ".png";
        forecastBox3.append($("<img>").attr("src", iconURL3));
        // Forecast Temp day 3
        var tempF = (responses.list[22].main.temp - 273.15) * 1.80 + 32;
        forecastBox3.append($("<p class='days'>").text("Temp (F): " + tempF.toFixed(2)));
        // Forecast Humidity day 3
        forecastBox3.append($("<p class='days'>").text("Humidity: " + responses.list[22].main.humidity + "%"));
        // Append forecast div
        $(".fiveDayForecast").append(forecastBox3);

        // Forecast Weather Day 4 Display Elements      
        var forecastBox4 = $("<div class='card col-md-2 forecast'>");
        // Forecast date day 4
        forecastBox4.append($("<p class='days-date'>").text(responses.list[30].dt_txt));
        // Forecast Icon day 4
        var iconCode4 = responses.list[30].weather[0].icon;
        var iconURL4 = "https://openweathermap.org/img/wn/" + iconCode4 + ".png";
        forecastBox4.append($("<img>").attr("src", iconURL4));
        // Forecast Temp day 4
        var tempF = (responses.list[30].main.temp - 273.15) * 1.80 + 32;
        forecastBox4.append($("<p class='days'>").text("Temp (F): " + tempF.toFixed(2)));
        // Forecast Humidity day 4
        forecastBox4.append($("<p class='days'>").text("Humidity: " + responses.list[30].main.humidity + "%"));
        // Append forecast div
        $(".fiveDayForecast").append(forecastBox4);

        // Forecast Weather Day 5 Display Elements      
        var forecastBox5 = $("<div class='card col-md-2 forecast'>");
        // Forecast date day 5
        forecastBox5.append($("<p class='days-date'>").text(responses.list[38].dt_txt));
        // Forecast Icon day 5
        var iconCode5 = responses.list[38].weather[0].icon;
        var iconURL5 = "https://openweathermap.org/img/wn/" + iconCode5 + ".png";
        forecastBox5.append($("<img>").attr("src", iconURL5));
        // Forecast Temp day 5
        var tempF = (responses.list[38].main.temp - 273.15) * 1.80 + 32;
        forecastBox5.append($("<p class='days'>").text("Temp (F): " + tempF.toFixed(2)));
        // Forecast Humidity day 5
        forecastBox5.append($("<p class='days'>").text("Humidity: " + responses.list[38].main.humidity + "%"));
        // Append forecast div
        $(".fiveDayForecast").append(forecastBox5);
    });
}

//When past search clicked, research
$(document).on("click", ".city-history", function(event){
    event.preventDefault();
    displayWeather();
    console.log(($(this).text()));
});

$(document).on("click", ".city-btn", displayWeather);
// $(document).on("click", ".city-btn", displayForecast);
//$("city-history").on("click", displayCurrentWeather)
displayHistory()