
$(document).ready(function(){
	var thermostat = new Thermostat();
	updateTemperature();

	$('#temp-up').click(function(){
		console.log('up');
		thermostat.raiseTemp();
		updateTemperature();
	};
	$('#temp-down').click(function(){
		console.log('down');
		thermostat.lowerTemp();
		updateTemperature();
	};
	$('#temp-reset').click(function(){
		thermostat.resetTemp();
		updateTemperature();
	};
	$('#power-saving-on').click(function(){
		thermostat.powerSavingOn();
		updateTemperature();
	};
	$('#power-saving-off').click(function(){
		thermostat.powerSavingOff();
		updateTemperature();
	};

	function updateTemperature() {
    	$('#temperature').text(thermostat.returnTemp);
  	};
});
