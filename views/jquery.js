$(document).ready(function() {

  var thermostat = new Thermostat();
  $("#temperature").html(thermostat.temperature);
  $("#energyUsage").html(thermostat.energyUsage());
  $("#energyMode").html(thermostat.isEnergyModeOn());

  $("#increaseTemperature").on('click', function() {
    $("#increaseTemperature").html(thermostat.increaseTemperature());
    $("#temperature").html(thermostat.temperature);
    $("#energyUsage").html(thermostat.energyUsage());
    $("#resetTemperature").fadeIn(100)
  })

  $("#decreaseTemperature").on('click', function() {
    $("#decreaseTemperature").html(thermostat.decreaseTemperature());
    $("#temperature").html(thermostat.temperature);
    $("#energyUsage").html(thermostat.energyUsage());
    $("#resetTemperature").fadeIn(100)
  })

  $("#resetTemperature").on('click', function() {
    $("#resetTemperature").html(thermostat.reset());
    $("#temperature").html(thermostat.temperature);
    $("#energyUsage").html(thermostat.energyUsage());
    $("#energyMode").html(thermostat.powerSaving = true);
    $("#energyMode").html(thermostat.isEnergyModeOn());
    $(this).fadeOut(300)
  })

  $("#switchMode").on('click', function() {
    $("#switchMode").html(thermostat.switchMode());
    $("#energyMode").html(thermostat.isEnergyModeOn());
    $("#temperature").html(thermostat.temperature);
    $("#resetTemperature").fadeIn(100)
  })


  // Weather
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=ed20b27e1a957073687e840e3c0732ec', function(data) {
    $("#londonTemperature").text(data.main.temp);
  })

  // Multiple choice
  var city = $("#multi-choice-city").val();
  displayWeather(city, 'multi-choice-');

  $("#multi-choice-city").change(function() {
    var city = $("#multi-choice-city").val();
    displayWeather(city, 'multi-choice-');
  })

  // Search Temperature
  $('#search-city-form').submit(function(event) {
    event.preventDefault();
    var city = $('#searched-city').val();
    displayWeather(city, 'searched-');
  })

  // Gets the weather for the desired city
  function displayWeather(city, id) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='
    var units = '&units=metric'
    var tokens = '&APPID=ed20b27e1a957073687e840e3c0732ec'
    $.get(url + city + units + tokens , function(data) {
      $('#' + id + 'temperature').text(data.main.temp);
      $('#' + id + 'temperature-text').text(city + "'s temperature: ")
    })
  };
});
