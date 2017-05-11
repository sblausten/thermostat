
describe( 'Thermostat', function(){
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe( 'default settings', function(){
		it ('starts at 20 degrees', function(){
			expect(thermostat.returnTemp()).toEqual(20)
		});
	});
  describe('functions', function(){
		it ('can increase the temperature by 1 degree', function(){
			thermostat.raiseTemp();
			expect(thermostat.returnTemp()).toEqual(21)
		});
		it ('can decrease the temperature by 1 degree', function(){
			thermostat.lowerTemp();
			expect(thermostat.returnTemp()).toEqual(19)
		});
	});
	describe('parameters', function(){
		it ('has a minimum temperature of 10 degrees', function(){
			for (i = 0; i < 11; i++){
				thermostat.lowerTemp();
			}
			expect(thermostat.returnTemp()).toEqual(10)
		});
	});
});
