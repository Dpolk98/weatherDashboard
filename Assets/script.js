// // 84f583d3b70337f7a927c7209d583c78 API key
// api.openweathermap.org/data/2.5/forecast?lat={$lat}&lon={$lon}&appid=84f583d3b70337f7a927c7209d583c78

var searchBtnEl = document.getElementById('searchBtn');
var city = document.querySelector('#searchBox').target;
var apiKey = '84f583d3b70337f7a927c7209d583c78'; //i know its unsecured but that's not important right now

searchBtnEl.addEventListener('click', getDailyForecast);
console.log(city);

function getDailyForecast(city) {
    var dailyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
  
    fetch(dailyForecastUrl)
      .then((response) => response.json())
      .then((data) => {
        
        var index = 1;
        for (var i = 0; i < data.list.length; i += 8) {
          var days = data.list[i];
  
          var weeklyForecast = document.getElementById("weeklyForecast" + index);
  
          var temp = weeklyForecast.querySelector("#temp");
          var wind = weeklyForecast.querySelector("#wind");
          var humidity = weeklyForecast.querySelector("#humidity");
  
          temp.innerHTML = Math.round(days.main.temp);
          wind.innerHTML = Math.round(days.wind.speed);
          humidity.innerHTML = Math.round(days.main.humidity);
  
          var dailyIcon = document.getElementById("dailyIcon" + index);
          dailyIcon.setAttribute(
            "src",
            `https://openweathermap.org/img/wn/${days.weather[0].icon}@2x.png`
          );
          index++;
        }
      });``
  };