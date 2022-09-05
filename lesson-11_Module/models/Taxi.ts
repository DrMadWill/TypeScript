import { Point } from '../interfaces/Point'
import { Vehicle } from '../interfaces/Vehicle'

export class Taxi implements Vehicle {
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