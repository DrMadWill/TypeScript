var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taski go X: ".concat(point.x, " to Y: ").concat(point.y));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus go X: ".concat(point.x, " to Y: ").concat(point.y));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.currentLocation = { x: 2, y: 2 };
taxi_1.travelTo({ x: 5, y: 17 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
