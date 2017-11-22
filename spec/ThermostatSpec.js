
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
  });
});
