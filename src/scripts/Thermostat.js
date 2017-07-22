"use strict"

function Thermostat() {
	this._targetTemp = 20
	this.MIN_TEMP = 10
	this.MAX_TEMP_PSM_ON = 25
	this.MAX_TEMP_PSM_OFF = 32
	this.powerSaving = true
};

Thermostat.prototype = {
	returnTemp: function() {
		return this._targetTemp;
	},

	raiseTemp: function() {
		if (this.isMaxTemp()) {
			return;
	  }
			this._targetTemp += 1;
	},

	lowerTemp: function() {
		if (this.isMinTemp()) {
			return;
	  }
			this._targetTemp -= 1;
	},

	isMinTemp: function() {
		return this.returnTemp() === this.MIN_TEMP;
	},

	isMaxTemp: function() {
		if (this.powerSaving === true){
			return this.returnTemp() === this.MAX_TEMP_PSM_ON;
		}
		return this.returnTemp() === this.MAX_TEMP_PSM_OFF;
	},

	powerSavingOff: function() {
		this.powerSaving = false;
	},

	powerSavingOn: function() {
		this.powerSaving = true;
	},

	resetTemp: function() {
		this._targetTemp = 20;
	},

	energyUsage: function() {
		if (this.returnTemp() < 18) {
			return "low-usage";
		}
		else if (this.returnTemp() < 25) {
			return "medium-usage";
		}
		else {
			return "high-usage";
		};
	}
};
