"use strict"
describe( 'Thermostat', function(){
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe( 'default settings', function(){
		it ('starts at 20 degrees', function(){
			expect(thermostat.returnTemp()).toEqual(20);
		});
		it ('starts in Power Saving Mode', function(){
			expect(thermostat.powerSaving).toEqual(true);
		});
	});
  describe('functions', function(){
		it ('can increase the temperature by 1 degree', function(){
			thermostat.raiseTemp();
			expect(thermostat.returnTemp()).toEqual(21);
		});
		it ('can decrease the temperature by 1 degree', function(){
			thermostat.lowerTemp();
			expect(thermostat.returnTemp()).toEqual(19);
		});
		it ('can be reset', function(){
			thermostat.lowerTemp();
			thermostat.resetTemp();
			expect(thermostat.returnTemp()).toEqual(20);
		});
	});
	describe('energyUsage', function(){
		it ('returns low-usage when _targetTemp below 18', function(){
			for (var i = 0; i < 4; i++){
				thermostat.lowerTemp();
			}
			expect(thermostat.energyUsage()).toEqual("low-usage");
		});
		it ('returns medium-usage when _targetTemp below 25', function(){
			expect(thermostat.energyUsage()).toEqual("medium-usage");
		});
		it ('returns high-usage when _targetTemp above 24', function(){
			for (var i = 0; i < 5; i++){
				thermostat.raiseTemp();
			}
			expect(thermostat.energyUsage()).toEqual("high-usage");
		});
	});
	describe('parameters', function(){
		it ('has a minimum temperature of 10 degrees', function(){
			for (var i = 0; i < 11; i++){
				thermostat.lowerTemp();
			}
			expect(thermostat.returnTemp()).toEqual(10);
		});
		it ('has a maximum temperature of 25 when PSM is on', function(){
			for (var i = 0; i < 6; i++){
				thermostat.raiseTemp();
			}
			expect(thermostat.returnTemp()).toEqual(25);
		});
		it ('has a maximum temperature of 32 when PSM is off', function(){
			thermostat.powerSavingOff();
			for (var i = 0; i < 13; i++){
				thermostat.raiseTemp();
			}
			expect(thermostat.returnTemp()).toEqual(32);
		});
	});
});
