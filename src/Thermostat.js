function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature === 10) throw ("Cannot go below 10 degrees!");
  this.temperature -= 1;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSaving === true && this.temperature === 25)
    throw ('Cannot go higher than 25 degrees when power saving');
  if (this.powerSaving === false && this.temperature === 32)
    throw ('Cannot go higher than 32 degrees');
  this.temperature += 1;
};
