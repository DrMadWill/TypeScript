interface Point{ // Tip kimi
    x:number;
    y:number;
}

interface Vehicle{ // Sema kimi
    travelTo(point:Point):void;
}

class Taxi implements Vehicle {
    constructor(private _currentLocation:Point){ }
    travelTo(point:Point):void{
        console.log(`taski go X: ${this._currentLocation.x} Y: ${this._currentLocation.y} to X: ${point.x} Y: ${point.y}`)
    }

    get Location(){
        return this._currentLocation;
    }

    set Location( value:Point ){
        if( value.x < 0 || value.y < 0 ){
            throw new Error("Not Useable Point")
        }
        this._currentLocation = value;
    }
}

let taxi_1: Taxi = new Taxi({x:2,y:2});

taxi_1.travelTo({x:5,y:17})

console.log(taxi_1.Location)
taxi_1.Location = {x:1,y:1};
console.log(taxi_1.Location)
