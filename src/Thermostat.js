"use strict"

function Thermostat() {
	this._targetTemp = 20
	this.MIN_TEMP = 10
};

Thermostat.prototype.returnTemp = function() {
	return this._targetTemp;
};

Thermostat.prototype.raiseTemp = function() {
	return this._targetTemp += 1
};

Thermostat.prototype.lowerTemp = function() {
	if (this.isMinTemp()) {
		return;
	} else {
		this._targetTemp -= 1;
	}
};

Thermostat.prototype.isMinTemp = function() {
	return this.returnTemp === this.MIN_TEMP;
};
