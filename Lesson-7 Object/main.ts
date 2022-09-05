interface Point{ // Tip kimi
    x:number;
    y:number;
}

interface Vehicle{ // Sema kimi
    currentLocation:Point;
    travelTo(point:Point):void;
}

class Taxi implements Vehicle {
    currentLocation:Point;
    travelTo(point:Point):void{
        console.log(`taski go X: ${point.x} to Y: ${point.y}`)
    }
    
}

class Bus implements Vehicle {
    currentLocation:Point;
    travelTo(point:Point):void{
        console.log(`Bus go X: ${point.x} to Y: ${point.y}`)
    }
}


let taxi_1: Taxi = new Taxi();

taxi_1.currentLocation = {x:2,y:2};

taxi_1.travelTo({x:5,y:17})
 
console.log(taxi_1.currentLocation.x)
console.log(taxi_1.currentLocation.y)
