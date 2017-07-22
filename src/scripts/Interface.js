
$(document).ready(function(){
	var thermostat = new Thermostat();
	updateTemperature();

	$('#temp-up').click(function(){
		console.log('up');
		thermostat.raiseTemp();
		updateTemperature();
	});
	$('#temp-down').click(function(){
		console.log('down');
		thermostat.lowerTemp();
		updateTemperature();
	});
	$('#temp-reset').click(function(){
		thermostat.resetTemp();
		updateTemperature();
	});
	$('#power-saving-switch').click(function(){
		console.log('on');
		thermostat.powerSavingOn();
		updateTemperature();
		updatePowerSavingDisplay();
	});
	$('#power-saving-off').click(function(){
		console.log('off');
		thermostat.powerSavingOff();
		updateTemperature();
		updatePowerSavingDisplay();
	});

	function updateTemperature() {
    $('#temperature').text(thermostat.returnTemp());
  };

	function updatePowerSavingDisplay() {
		$('#show-PS-on, #show-PS-off').toggle();
		$('#PS-switch-on, #PS-switch-off').toggle();
	}
});
