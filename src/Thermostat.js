
function Thermostat() {
	this._targetTemp = 20
};

Thermostat.prototype.targetTemp = function() {
	return this._targetTemp;
};
