// History sidebar
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    // Add searches to history sidebar array
    function displayHistory () {
        $("#history").empty();

        for (var i = 0; i < searchHistory.length; i++) {
            $("#history").append($("<button class='city-history'>").text(searchHistory[i]));
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

    //When past search clicked, research
    $(document).on("click", ".city-history", function(){
        console.log(($(this).text()));
    })
    
    
    // Display current weater on search
    function displayCurrentWeather() {

        var city = $("#citySearch").val().trim();
        var currentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1676bf31a729a27d97e9612112df0899";
        
        // Current Weather
        $(".weather").empty();
        
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
            displayBox.append($("<h4>").text("Temperature (F) " + tempF.toFixed(2)));
            // Show humidity
            displayBox.append($("<h4>").text("Humidity " + response.main.humidity + " %"));
            // Show wind speed
            displayBox.append($("<h4>").text("Wind Speed " + response.wind.speed + " MPH"));
            // Display UV Index
            
            // Append div.weather
            $(".weather").append(displayBox);
        });

        // Forecast Weather
        var forecastURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=1676bf31a729a27d97e9612112df0899";
        
        $(".fiveDayForecast").empty();
        
        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function(responses) {
            console.log(responses);
            
            // Forecast Weather Display Elements
            // Forecast date
            $("#forecast").append($("<div class='card col-md-2 forecast'>").text(responses.list.dt_txt));
            
            // Forecast Icon
            $("#forecast").append($("<div class='card col-md-2 forecast'>").text(responses.list.weather));
            
            // Forecast Temp
            var tempF = (responses.main.temp - 273.15) * 1.80 + 32;
            $("#forecast").append($("<div class='card col-md-2 forecast tempF'>").text(tempF.toFixed(2)));
            
            // Forecast Humidity
            $("#forecast").append($("<div class='card col-md-2 forecast'>").text(responses.list.humidity));
        });
    }
    
    $(document).on("click", ".city-btn", displayCurrentWeather);
    // $(document).on("click", ".city-btn", displayForecast);
    $("city-history").on("click", displayCurrentWeather)
    displayHistory()




        // Display current weater on search
        // function displayForecast() {

        //     var city = $("#citySearch").val().trim();
        //     var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=1676bf31a729a27d97e9612112df0899";
            
        //     $(".fiveDayForecast").empty();
            
        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     }).then(function(response) {
        //         console.log(response);
                
        //     // Forecast Weather Display Elements
        //     // Forecast date
        //     $("#forecast").append($("<div class='card col-md-2 forecast'>").text(response.list.dt_txt));
            
        //     // Forecast Icon
        //     $("#forecast").append($("<div class='card col-md-2 forecast'>").text(response.list.weather));
            
        //     // Forecast Temp
        //     var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        //     $("#forecast").append($("<div class='card col-md-2 forecast tempF'>").text(tempF.toFixed(2)));
            
        //     // Forecast Humidity
        //     $("#forecast").append($("<div class='card col-md-2 forecast'>").text(response.list.humidity));
                
        //     // Append div.weather
        //         $(".fiveDayForecast").append(forecastBox1);
        //     });
            
        // }
    
