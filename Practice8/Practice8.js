//Task1
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, ,...z] = arr ;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]

//Task2
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//     };
//     let {names: [, name2], ages: [,age2], names: [, , , name4], ages: [, , , age4]} = data;
//     console.log(name2); // "Tom"
//     console.log(age2); // 24
//     console.log(name4); // "Bob"
//     console.log(age4); // 26

//Task3
// function mul (...args) {
//    const filteredArgs = args.filter(arg => typeof arg === "number");
//    if(filteredArgs.length === 0){
//     return 0;
//    }
//    let product = filteredArgs.reduce((acc, num) => acc * num, 1);
//    return product;
//  }
//  console.log( mul (1, "str", 2, 3, true )); // 6
//  console.log( mul ( null , "str", false , true )); // 0

//Task4
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback(() => `${this.data}`);
//     }
// }
// let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());
//     },
//     notification: function () {
//         return (callback) => {
//             this.result = callback();
//         }
//     }
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"    

//Task 5
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", " i "];

// function mapBuilder(keys, values) {
//     const map = new Map();
//     for (let i = 0; i < keys.length; i++) {
//         map.set(keys[i], values[i]);
//     }
//     return map;
// }

// let map = mapBuilder (keys, values);
// console.log( map.size ); // 4
// console.log( map.get (2)); // "span"
