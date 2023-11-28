//Task1
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web development"
// };

// function propsCount(cuurentObject) {
//     const objectLength = Object.keys(cuurentObject).length;
//     return objectLength;
// }

// console.log(propsCount(mentor)); 

//Task2
// const Car = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2023,
//     color: "Black",
//     features: [
//       { type: "GPS", installed: true },
//       { type: "Leather Seats", installed: true },
//       { type: "Sunroof", installed: false }
//     ]
//   };

// function showProps(obj) {
//     const output = [];
//     const keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//         const currentKey = keys[i];
//         const currentValue = obj[currentKey];
//         if (Array.isArray(currentValue)) {
//             let newArr = [];
//             for (let j = 0; j < currentValue.length; j++) {
//                 let str = Object.entries(currentValue[j]);
//                 for (let k = 0; k < str.length; k++) {
//                     const element = str[k];
//                     newArr.push(element.join(" : "));
//                     //newArr.splice(1, 0, element);
//                 }
//             }
//             output.push(currentKey + " : " + newArr);
//         } else {
//             output.push(currentKey + " : " + currentValue);
//         }
//     }
//     return output;
// }

// console.log(showProps(Car));

//Task 3

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//         }
//     showFullName(name, surname){
//         return(name + " " + surname);
//     }
// }

// class Student extends Person{
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showCourse() {
//         let currentYear = new Date().getFullYear();
//         try {
//             if (currentYear - this.year > 6) {
//                 throw new Error("Not a valid course - You have already graduated.");
//             } else if (currentYear - this.year < 1) {
//                 throw new Error("Not a valid course - You are not a student yet.");
//             } else {
//                 return(currentYear - this.year);
//             }
//         } catch (error) {
//             return(error.message);
            
//         }
//     }
//     showFullName(middlename) {
//         return(this.surname + this.name + middlename);
//     }
// }

// const stud1 = new Student("Petro", " Petrenko ", 2017);
// console.log(stud1.showFullName(" Petrovych ")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6

//Task 4

// class Worker {
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays){
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     get experience() {
//         return this.#experience;
//     }
//     set experience(value) {
//         this.#experience = value;
//     }
//     showSalary(){
//         return this.dayRate * this.workingDays;
//     }
//     showSalaryWithExperience(){
//         return this.dayRate * this.#experience * this.workingDays;
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// console.log(worker1.fullName + " salary: " + worker1.showSalary());
// console.log("New experience: " + worker1.experience);
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
// worker1.experience = 1.5;
// console.log("New experience: " + worker1.experience);
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());

// let worker2 = new Worker("Tom Thomson", 48, 22);
// console.log(worker2.fullName);
// console.log(worker2.fullName + " salary: " + worker2.showSalary());
// console.log("New experience: " + worker2.experience);
// console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());
// worker2.experience = 1.5;
// console.log("New experience: " + worker2.experience);
// console.log(worker2.fullName + " salary: " + worker2.showSalaryWithExperience());

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// console.log(worker3.fullName + " salary: " + worker3.showSalary());
// console.log("New experience: " + worker3.experience);
// console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());
// worker3.experience = 1.5;
// console.log("New experience: " + worker3.experience);
// console.log(worker3.fullName + " salary: " + worker3.showSalaryWithExperience());

// function sortSalariesByExperience(arrOfWorkers){
//     return arrOfWorkers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());    
// }

// const workers = [worker1, worker2, worker3];
// const sortedWorkers = sortSalariesByExperience(workers);
// for (worker in sortedWorkers) {
//     console.log(`${sortedWorkers[worker].fullName}: ${sortedWorkers[worker].showSalaryWithExperience()}`);
// }

// function dynamicSorting(workers, number) {
//     console.log(workers.sort((a, b) => a[number] - b[number]));
// }

// dynamicSorting(workers, 2);
