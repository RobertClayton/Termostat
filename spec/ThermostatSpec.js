
describe('Thermostat', function(){

  var thermostat;

  beforeEach (function(){
    thermostat = new Thermostat;
  });

  describe('when created', function(){

    it('has a temperature of 20 degrees', function(){
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });

    it('power saving mode on by default', function(){
      expect(thermostat.powerSaving).toEqual(true);
    });
  });

  describe('change temperature', function() {
    it('should decrease the temperature by one', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
    });

    it('should increase the temperature by one', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
    });

    it('cannot go below ten degrees', function (){
      thermostat.temperature = thermostat.MINIMUM_TEMPERATURE;
      expect(function() { thermostat.decreaseTemperature() })
        .toThrow("Cannot go below 10 degrees!");
    });
  });

  describe('power saving mode', function() {
    describe('when on', function () {
      it('has a maximum temperature of 25 degrees', function () {
        thermostat.temperature = thermostat.MAX_POWER_SAVING;
        thermostat.powerSaving = true;
        expect(function() { thermostat.increaseTemperature() })
          .toThrow('Cannot go higher than 25 degrees when power saving');
      });
    });

    describe('when off', function () {
      it('has a maximum temperature of 32 degrees', function () {
        thermostat.temperature = thermostat.MAX_TEMPERATURE;
        thermostat.powerSaving = false;
        expect(function() { thermostat.increaseTemperature() })
          .toThrow('Cannot go higher than 32 degrees');
      });
    });
  });

  describe('reset temperature', function() {
    it('should set temperature to 20', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe('current energy usage', function() {
    it('should return low usage if less than 18', function () {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('Low-usage');
    });

    it('should return medium usage if less than 25', function () {
      thermostat.temperature = 24;
      expect(thermostat.energyUsage()).toEqual('Medium-usage');
    });

    it('should return high usage if greater than or equal to 25', function () {
      thermostat.temperature = 27;
      expect(thermostat.energyUsage()).toEqual('High-usage');
    });
  });

  describe('switch energy mode', function() {
    it('should switch from on to off', function() {
      thermostat.switchMode();
      expect(thermostat.powerSaving).toEqual(false);
    });

    it('should switch from off to on', function() {
      thermostat.powerSaving = false
      thermostat.switchMode();
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('when turning on, it should set temperature to 25 if above 25', function() {
      thermostat.temperature = 30
      thermostat.powerSaving = false
      thermostat.switchMode();
      expect(thermostat.temperature).toEqual(thermostat.MAX_POWER_SAVING);
    })
  });

});
