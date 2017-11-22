'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 32;
  this.MAX_POWER_SAVING = 25;
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE )
    throw ("Cannot go below 10 degrees!");
  this.temperature -= 1;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSaving === true && this.temperature === this.MAX_POWER_SAVING)
    throw ('Cannot go higher than 25 degrees when power saving');
  if (this.powerSaving === false && this.temperature === this.MAX_TEMPERATURE)
    throw ('Cannot go higher than 32 degrees');
  this.temperature += 1;
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) return "Low-usage";
  if (this.temperature < 25) return "Medium-usage";
  if (this.temperature >= 25) return "High-usage";
};

Thermostat.prototype.switchMode = function () {
  this.powerSaving = !this.powerSaving
  if (this.powerSaving == true && this.temperature > this.MAX_POWER_SAVING) {
    this.temperature = this.MAX_POWER_SAVING;
  }
}
