//Practice 3
//Task 1
// const arr = [2,3,4,5];
// let product = 1;

// for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
// }
// console.log(product);

// let i = 0;
// while (i < arr.length) {
//     product *= arr[i];
//     i++;
// }
// console.log(product);

//Task 2
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

//Task 3
// function randArray(k) {
//     let arr = [];
//     let min = 1;
//     let max = 1500;
//     while(k > 0){
//         k--;
//         randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//         arr.push(randomNum);
        
//     }
//     return console.log(arr);
// }

// randArray(5);

//Task 4
// function raiseToDegree(a, b) {
//     a = parseInt(prompt("Please enter a number"));
//     b = parseInt(prompt("Please enter the power for the number"));
//     let result = a;
//     while (b > 1) {
//         result *= a;
//         b--;        
//     }
//     return console.log(result);
// }

// raiseToDegree();

//Task 5
// function findMin() {
//     let num = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < num) {
//             num = arguments[i];
//         }
//     }
//     console.log(num);
// }

// findMin(3,4,8,0.2,6,78,33,5)

//Task 6
// function findUnique(arr) {
//     let unique = true;
//     for (let i = 0; i < arr.length; i++) {
//         const currentNumber = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (currentNumber === arr[j]) {
//                 unique = false;
//             }
//         }
       
//     }
//     return console.log(String(unique));
// }

// findUnique([1, 2, 5, 6, 2]);

//Task 7
// function lastElem(arr, x) {
//    if(x > arr.length) {
//         console.log(arr);
//    } else if (x == 1 || x == undefined){
//         console.log(arr[arr.length - 1]);
//    } else{
//         console.log(arr.slice(arr.length - x, arr.length));
//    }
// }

// lastElem([3, 4, 10, -5], 8);

//Task 8
// function stringConvertion(str) {
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     console.log(words.join(" "));
// }

// stringConvertion('i love java script')