"use strict"

function Thermostat() {
	this._targetTemp = 20
	this.MIN_TEMP = 10
	this.MAX_TEMP_PSM_ON = 25
	this.MAX_TEMP_PSM_OFF = 32
	this.powerSaving = true
};

Thermostat.prototype.returnTemp = function() {
	return this._targetTemp;
};

Thermostat.prototype.raiseTemp = function() {
	if (this.isMaxTemp()) {
		return;
  }
		this._targetTemp += 1;
};

Thermostat.prototype.lowerTemp = function() {
	if (this.isMinTemp()) {
		return;
  }
		this._targetTemp -= 1;
};

Thermostat.prototype.isMinTemp = function() {
	return this.returnTemp() === this.MIN_TEMP;
};

Thermostat.prototype.isMaxTemp = function() {
	if (this.powerSaving === true){
		return this.returnTemp() === this.MAX_TEMP_PSM_ON;
	}
	return this.returnTemp() === this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.powerSavingOff = function() {
	this.powerSaving = false;
};

Thermostat.prototype.resetTemp = function() {
	this._targetTemp = 20;
};

Thermostat.prototype.energyUsage = function() {
	if (this.returnTemp() < 18) {
		return "low-usage";
	}
	else if (this.returnTemp() < 25) {
		return "medium-usage";
	}
	else {
		return "high-usage";
	};
};





