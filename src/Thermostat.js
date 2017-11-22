function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature === 10) throw ("Cannot go below 10 degrees!");
  this.temperature -= 1;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;
};
