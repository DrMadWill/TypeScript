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
