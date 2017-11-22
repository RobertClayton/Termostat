
describe('Thermostat', function(){

  var thermostat;

  beforeEach (function(){
    thermostat = new Thermostat;
  });

  describe('when created', function(){
    it('has a tempreture of 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('change temperature', function() {
    it('should decrease the temperature by one', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('should increase the temperature by one', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it('cannot go below ten degrees', function (){
      thermostat.temperature = 10;
      expect(function() { thermostat.decreaseTemperature() })
        .toThrow("Cannot go below 10 degrees!");
    });
  });

  describe('power saving mode', function() {
    describe('when on', function () {
      it('has a maximum temperature of 25 degrees', function () {
        thermostat.temperature = 25;
        thermostat.powerSaving = true;
        expect(function() { thermostat.increaseTemperature() })
          .toThrow('Cannot go higher than 25 degrees when power saving');
      });
    });
    describe('when off', function () {
      it('has a maximum temperature of 32 degrees', function () {
        thermostat.temperature = 32;
        thermostat.powerSaving = false;
        expect(function() { thermostat.increaseTemperature() })
          .toThrow('Cannot go higher than 32 degrees');
      });
    });
  });
});
