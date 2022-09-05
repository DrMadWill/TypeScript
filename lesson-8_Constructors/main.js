var Taxi = /** @class */ (function () {
    function Taxi(currentLocation) {
        this.currentLocation = currentLocation;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taski go X: ".concat(point.x, " to Y: ").concat(point.y));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 2 });
taxi_1.travelTo({ x: 5, y: 17 });
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
