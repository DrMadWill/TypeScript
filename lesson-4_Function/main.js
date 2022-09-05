function getAverage(a, b, c) {
    return (a + b + (c !== null && c !== void 0 ? c : 0)) / 3;
}
// console.log(getAverage(1,2,3) , getAverage(3,3))
var getAverageArr = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    a.forEach(function (element) {
        total += element;
    });
    return total / a.length;
};
console.log(getAverageArr(1, 2, 34, 55, 5, 67, 8));
