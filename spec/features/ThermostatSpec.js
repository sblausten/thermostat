
describe( 'Thermostat', function(){
	var thermostat;
	describe( 'default settings', function(){
		thermostat = new Thermostat();
		it ('starts at 20 degrees', function(){
			expect(thermostat.targetTemp()).toEqual(20)
		});
	});
});
