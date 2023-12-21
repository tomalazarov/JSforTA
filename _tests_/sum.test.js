const sum = require('./sum');

describe("Sum test", () => {
    test("Is 0.1 + 0.2 result of 0.3", () => {
        expect(sum(0.1,0.2)).toBeCloseTo(0.3);
    });
});