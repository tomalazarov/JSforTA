// Practice_2
// Task 1

// let x = 1;
// let y = 2;

// let res1 = x + String(y);
// console.log(res1); // "12"
// console.log( typeof res1); // "string"

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log( typeof res2); // "string"

// let res3 = Boolean(y - x);
// console.log(res3); // true
// console.log( typeof res3); // " boolean "

// let res4 = parseInt('bad', x) - y;
// console.log(res4); // NaN
// console.log( typeof res4); // "number"

// Task 2
// let num = prompt("Please enter a number");
// a)
// if(num > 0){
//     console.log(num + " is a positive number");
// } 

// b)
// if(num%7 == 0){
//     console.log(num + " is multiple by 7");
// }

// Task 3
// let arr = [];
// // 1)
// arr.unshift(1);
// // 2)
// arr.push("qwerty");
// // 3)
// arr[2] = true;
// // 4)
// arr.push(null);
// // 5)
// alert(arr.length);
// // 6)
// let val = prompt("Enter any value");
// arr.push(val);
// // 7)
// alert(arr[4]);
// // 8)
// arr.shift();
// alert(arr);

// Task 4
// let cities = [" Rome ", " Lviv ", " Warsaw "]; 
// let result = cities.join("*");
// console.log(result);

// Task 5
// let isAdult = prompt("How old are you?");
// if(isAdult >= 18){
//     alert("You have reached the age of majority");
// } else {
//     alert("You are still too young");
// }

// Task 6
// let sideA = +prompt("Enter length for side A of the triangle");
// let sideB = +prompt("Enter length for side B of the triangle");
// let sideC = +prompt("Enter length for side C of the triangle");

// while(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
//     alert("Invalid data");
//     sideA = +prompt("Enter length for side A of the triangle");
//     sideB = +prompt("Enter length for side B of the triangle");
//     sideC = +prompt("Enter length for side C of the triangle");
// }

// let s= (sideA + sideB + sideC)/2;
// let areaCube = (s*(s-sideA)*(s-sideB)*(s-sideC));
// let area = (areaCube ** (1/2));
// const areaRounded = area.toFixed(3);
// console.log(areaRounded);
// if(sideC == (Math.sqrt((sideA*sideA)+(sideB*sideB)))){
//     console.log("The triangle is rectangular");
// } else {
//     console.log("The triangle is not rectangular");
// }

// Task 7
// const currentDate = new Date; 
// let time = currentDate.getHours();

// if(time >= 23 && time <= 5){
//     console.log("Good night");
// } else if(time >= 5 && time <= 11){
//     console.log("Good morning");
// } else if(time >= 11 && time <= 17){
//     console.log("Good day");
// } else {
//     console.log("Good evening");
// }

// switch (true) {
//     case (time >= 23 && time < 5):
//         console.log("Good night");
//         break;
//     case (time >= 5 && time < 11):
//         console.log("Good morning");
//         break;
//     case (time >= 11 && time < 17):
//         console.log("Good day");
//         break;
//     default:
//         console.log("Good evening");
//         break;    
// }

