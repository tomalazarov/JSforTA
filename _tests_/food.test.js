const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
    ];

    const filterFoodPrice = require('./food');
    describe("Test function with given array", () => {
        test("Whether the expected length of the sorted array 3 corresponds to the actual length.", () => {
            expect(filterFoodPrice(food, 12, 40)).toHaveLength(3);
        });

        test("Sorted array contains the object { kind: 'pepper', price: 27 }", () => {
            expect(filterFoodPrice(food, 12, 40)).toContainEqual({ kind: 'pepper', price: 27 });
        });

        test("Sorted array contains 2, 3, and 4 elements of the original food array", () => {
            const result = filterFoodPrice(food, 12, 40);
            expect(result).toContain(food[1]);
            expect(result).toContain(food[2]); 
            expect(result).toContain(food[3]);
        });

        test("Price property of the 1st element of the sorted array is greater than min", () => {
            const result = filterFoodPrice(food, 12, 40);
            expect(result[0].price).toBeGreaterThan(12);
        });

        test("Price property of the 3rd element of the sorted array is less than max", () => {
            const result = filterFoodPrice(food, 12, 40);
            expect(result[2].price).toBeLessThan(40);
        });

        test("Sorted array does not contain the element { kind: 'lemon', price: 50 }", () => {
            expect(filterFoodPrice(food, 12, 40)).not.toContainEqual({ kind: 'lemon', price: 50 });
        });

        test("If result is array", () => {
            const result = filterFoodPrice(food, 12, 40);
            expect(typeof result).toBe("object");
        });

        test("Return an empty array when no elements fall within the price range", () => {
            expect(filterFoodPrice(food, 100, 200)).toEqual([]);
        });

    })