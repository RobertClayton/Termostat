$(document).ready(function() {

  var thermostat = new Thermostat();
  $("#temperature").html(thermostat.temperature);
  $("#energyUsage").html(thermostat.energyUsage());
  $("#energyMode").html(thermostat.isEnergyModeOn());

  $("#increaseTemperature").on('click', function() {
    $("#increaseTemperature").html(thermostat.increaseTemperature());
    $("#temperature").html(thermostat.temperature);
    $("#energyUsage").html(thermostat.energyUsage());
  })

  $("#decreaseTemperature").on('click', function() {
    $("#decreaseTemperature").html(thermostat.decreaseTemperature());
    $("#temperature").html(thermostat.temperature);
    $("#energyUsage").html(thermostat.energyUsage());
  })

  $("#resetTemperature").on('click', function() {
    $("#resetTemperature").html(thermostat.reset());
    $("#temperature").html(thermostat.temperature);
    $("#energyUsage").html(thermostat.energyUsage());
  })

  $("#switchMode").on('click', function() {
    $("#switchMode").html(thermostat.switchMode());
    $("#energyMode").html(thermostat.isEnergyModeOn());
  })
});
