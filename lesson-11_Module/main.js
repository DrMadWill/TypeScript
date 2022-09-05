"use strict";
exports.__esModule = true;
var Taxi_1 = require("./models/Taxi");
var taxi_1 = new Taxi_1.Taxi({ x: 2, y: 2 });
taxi_1.travelTo({ x: 5, y: 17 });
console.log(taxi_1.Location);
taxi_1.Location = { x: 1, y: 1 };
console.log(taxi_1.Location);
