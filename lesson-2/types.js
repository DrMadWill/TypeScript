// Type Any
var anyvariable;
anyvariable = 3;
anyvariable = true;
anyvariable = 'Hello';
// Type Number
var age;
//let age: number = 1;
age = 4;
// age = '' // => error
var userName;
// let userName: string = "Derwill";
var numberArr = [1, 2, 3];
var numberArr2 = [1, 4, 5];
var numberArr3 = ['a', "asdasd", 3, true];
var arr1 = ['a', 5, true]; //(tuple)
var Currency;
(function (Currency) {
    Currency[Currency["Usd"] = 1] = "Usd";
    Currency[Currency["Dollar"] = 2] = "Dollar";
    Currency[Currency["Aze"] = 3] = "Aze";
})(Currency || (Currency = {}));
var usd = Currency.Usd;
var dollar = Currency.Dollar;
var aze = Currency.Aze;
console.log(usd, dollar, aze);
