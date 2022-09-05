import { Taxi } from './models/Taxi'

let taxi_1: Taxi = new Taxi({x:2,y:2});
taxi_1.travelTo({x:5,y:17})

console.log(taxi_1.Location)
taxi_1.Location = {x:1,y:1};
console.log(taxi_1.Location)
