function getAverage(a, b, c) {
    return (a + b + (c !== null && c !== void 0 ? c : 0)) / 3;
}
console.log(getAverage(1, 2, 3), getAverage(3, 3));
