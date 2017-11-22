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

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) return "Low-usage";
  if (this.temperature < 25) return "Medium-usage";
  if (this.temperature >= 25) return "High-usage";
};

Thermostat.prototype.switchMode = function () {
  this.powerSaving = !this.powerSaving
  if (this.powerSaving == true && this.temperature > 25) {
    this.temperature = 25;
  }
}
