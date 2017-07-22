
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
	$('div.PS-switch').click(function(){
		thermostat.powerSavingToggle();
		updateTemperature();
		updatePowerSavingDisplay();
	});

	function updateTemperature() {
    $('#temperature').text(thermostat.returnTemp());
  }

  function updatePowerSavingDisplay() {
		console.log(thermostat.powerSaving);
		$('path.PS-switch').toggleClass('show-PS-on');
		$('path.PS-switch').toggleClass('show-PS-off');
	}
});
