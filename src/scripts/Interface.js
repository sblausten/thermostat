
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
		updateTempColor();
    $('.temperature').text(thermostat.returnTemp());
  }

	function updateTempColor() {
		switch(thermostat.energyUsage()) {
			case 'low-usage':
				$('.temperature').css('color', 'blue');
				break;
			case 'medium-usage':
				$('.temperature').css('color', 'green');
				break;
			case 'high-usage':
				$('.temperature').css('color', 'red');
				break;
		}
	}

  function updatePowerSavingDisplay() {
		console.log(thermostat.powerSaving);
		$('.PS-path').toggleClass('show-PS-on');
		$('.PS-path').toggleClass('show-PS-off');
	}
});
