const task21 = require('./task21');
const task22 = require('./task22');
const task23 = require('./task23');
const task24 = require('./task24');
const task25 = require('./task25');
const task26 = require('./task26');
const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2' ];

describe("Test userList array", () => {
    test("array contains the element admin", () => {
        expect(task21(userList, "admin")).toBe("admin");
    });

    test("first element in the array is Nick", () => {
        expect(task22(userList, "Nick")).toBe("Nick");
    });

    test("last element in the array is new _ user_2", () => {
        expect(task23(userList, "new_user_2")).toBe("new_user_2");
    });

    test("length of the array is 5", () => {
        expect(task24(userList)).toBe(5);
    });

    test("3rd element of the array has type string", () => {
        expect(task25(userList)).toBe("string");
    });

    test("array does not have an 8th element", () => {
        expect(task26(userList)).toBe(true);
    });

})