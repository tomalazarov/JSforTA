function getCircleLength(radius) {
    const pi = Math.PI;
    const circleLength = 2 * pi * radius;
    return parseFloat(circleLength.toFixed(1));
}

function getCircleArea(radius) {
    const pi = Math.PI;
    const circleArea = pi * Math.pow(radius, 2);
    return circleArea;
}

console.log(getCircleArea());
module.exports = {getCircleArea, getCircleLength};