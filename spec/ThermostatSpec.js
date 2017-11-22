
describe('Thermostat', function(){
  var thermostat = new Thermostat;

  beforeEach (function(){
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
  });
});
