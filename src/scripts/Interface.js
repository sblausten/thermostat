
$(document).ready(function(){
	var thermostat = new Thermostat();
	updateTemperature();

	$('.temp-up').click(function(){
		thermostat.raiseTemp();
		updateTemperature();
	});
	$('.temp-down').click(function(){
		thermostat.lowerTemp();
		updateTemperature();
	});
	$('.temp-reset').click(function(){
		thermostat.resetTemp();
		updateTemperature();
	});
	$('.PS-switch').click(function(){
		thermostat.powerSavingToggle();
		updateTemperature();
		updatePowerSavingDisplay();
	});

	function updateTemperature() {
    $('.temperature').text(thermostat.returnTemp());
  }

  function updatePowerSavingDisplay() {
		console.log(thermostat.powerSaving);
		$('.PS-path').toggleClass('show-PS-on');
		$('.PS-path').toggleClass('show-PS-off');
	}
});
