"use strict";
exports.__esModule = true;
exports.Taxi = void 0;
var Taxi = /** @class */ (function () {
    function Taxi(_currentLocation) {
        this._currentLocation = _currentLocation;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taski go X: ".concat(this._currentLocation.x, " Y: ").concat(this._currentLocation.y, " to X: ").concat(point.x, " Y: ").concat(point.y));
    };
    Object.defineProperty(Taxi.prototype, "Location", {
        get: function () {
            return this._currentLocation;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("Not Useable Point");
            }
            this._currentLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
exports.Taxi = Taxi;
