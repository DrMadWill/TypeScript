// Type Any

    let anyvariable; 

    anyvariable = 3;
    anyvariable = true;
    anyvariable = 'Hello';

// Type Number
let age: number;
//let age: number = 1;
age = 4;
// age = '' // => error
let userName: string;
// let userName: string = "Derwill";

let numberArr : number[] = [1,2,3]
let numberArr2 :Array<number> = [1,4,5]
let numberArr3 :any[] = ['a',"asdasd",3,true]

let arr1 :[string,number,boolean] = ['a',5,true] //(tuple)


enum Currency{
    Usd=1,
    Dollar=2,
    Aze = 3
}
let usd = Currency.Usd
let dollar = Currency.Dollar
let aze = Currency.Aze

console.log(usd,dollar,aze)