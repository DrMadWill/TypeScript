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
     //
}

class Bus implements Vehicle {
    currentLocation:Point;
    travelTo(point:Point):void{
        console.log(`Bus go X: ${point.x} to Y: ${point.y}`)
    }
}
