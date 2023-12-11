//Task1

// function getPromise(msg, delay) {
//     const data = new Promise(function (resolve, reject) {

//         setTimeout(() => {
//             console.log(msg);
//         }, delay);
//     });
//     return data;
// }


// getPromise("test promise", 2000).then(function (data) {
//     console.log(data);
// });

// //Result : after 2 seconds , "test promise" is displayed in the console

//Task2

// function calcArrProduct(arr) {
//     const promise = new Promise(function (resolve, reject) {
//         const elements = [...arr];
//         let product = 1;
//         for (let i = 0; i < elements.length; i++) {
//             if (typeof elements[i] === "number") {
//                 product *= elements[i];
//             } else {
//                 const reason = new Error("Error! Incorrect array!");
//                 reject(reason);
//             }
//         }
//         resolve(product);
//     })

//     return promise;
// }

// calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
// // "Error! Incorrect array!"

