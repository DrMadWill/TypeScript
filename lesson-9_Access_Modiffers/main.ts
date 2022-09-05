interface Point{ // Tip kimi
    x:number;
    y:number;
}

interface Vehicle{ // Sema kimi
    travelTo(point:Point):void;
}

class Taxi implements Vehicle {
    constructor(private currentLocation:Point){ }
    travelTo(point:Point):void{
        console.log(`taski go X: ${this.currentLocation.x} Y: ${this.currentLocation.y} to X: ${point.x} Y: ${point.y}`)
    }
}

let taxi_1: Taxi = new Taxi({x:2,y:2});

taxi_1.travelTo({x:5,y:17})

