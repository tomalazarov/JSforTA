const {getCircleArea, getCircleLength} = require('./calcCircle');

describe("Test calc circle functions", () => {
    test("Verify the length of a circle is 138.2", () => {
        expect(getCircleLength(22)).toBeCloseTo(138.2);
    });

    test("verify the approximate area of the circle is 254.47", () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47);
    });

    test("When no argument is passed", () => {
        expect(getCircleLength()).toBeNaN();
    });

    test("When no argument is passed", () => {
        expect(getCircleArea()).toBeNaN();
    });
})