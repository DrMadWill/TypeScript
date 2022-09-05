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
var taxi_1 = new Taxi({ x: 2, y: 2 });
taxi_1.travelTo({ x: 5, y: 17 });
console.log(taxi_1.Location);
taxi_1.Location = { x: 1, y: 1 };
console.log(taxi_1.Location);
