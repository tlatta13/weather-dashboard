// History sidebar
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    // Add searches to history sidebar array
    function displayHistory () {
        $("#history").empty();

        for (var i = 0; i < searchHistory.length; i++) {
            $("#history").append($("<h4 class='city'>").text(searchHistory[i]));
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

    // When past search clicked, research
    // $(document).on("click", ".city" function(){
    //     console.log(($(this).text()));
    // })
    
    
    // Display current weater on search
    function displayCurrentWeather() {

        var city = $("#citySearch").val().trim();
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1676bf31a729a27d97e9612112df0899";
        
        $(".weather").empty();
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            
            // Current Weather Display Elements
            var displayBox = $("<div>");
            // Show temp
            displayBox.append($("<h3>").text("Current weather in " + response.name + ":"));
            // Show temp
            displayBox.append($("<h4>").text("Temperature (F) " + response.main.temp));
            // Show humidity
            displayBox.append($("<h4>").text("Humidity " + response.main.humidity + " %"));
            // Show wind speed
            // displayBox.append($("<h4>").text("Wind Speed " + response.main.speed[0] + " MPH"));
            // Display UV Index
            displayBox.append($("<h4>").text("UV Index " + response.main.temp));
            // Append div.weather
            $(".weather").append(displayBox);
        });
        
    }

        // Display current weater on search
        function displayForecast() {

            var city = $("#citySearch").val().trim();
            var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=1676bf31a729a27d97e9612112df0899";
            
            $(".weather").empty();
            
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                
                // Current Weather Display Elements
                var displayBox = $("<div>");
                // Show temp
                displayBox.append($("<h3>").text("Current weather in " + response.name + ":"));
                // Show temp
                displayBox.append($("<h4>").text("Temperature (F) " + response.main.temp));
                // Show humidity
                displayBox.append($("<h4>").text("Humidity " + response.main.humidity + " %"));
                // Show wind speed
                // displayBox.append($("<h4>").text("Wind Speed " + response.main.speed[0] + " MPH"));
                // Display UV Index
                displayBox.append($("<h4>").text("UV Index " + response.main.temp));
                // Append div.weather
                $(".weather").append(displayBox);
            });
            
        }

    $(document).on("click", ".city-btn", displayCurrentWeather);
    
    displayHistory()
    
    
    
    




    


// Weather APIs
/// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={1676bf31a729a27d97e9612112df0899}

// Weather tags
/// temerpature.value
/// humidity.value
/// wind.speed.value
/// weather.icon.id
/// precipitation.value