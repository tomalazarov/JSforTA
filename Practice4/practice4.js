//Task1
// try {
//     function calcRectangleArea(width, height) {
//         if (typeof(width) == "number" && typeof(height) == "number") {
//             const rectArea = width * height;
//             console.log(rectArea); 
//         } else{
//             throw new Error("Non-numeric parameters are not allowed")
//         }
//     }
// } catch (exception) {
//     console.log(exception.message);
// }

// calcRectangleArea(5,8);

//Task2
// function checkAge() {   
//     try {
//         let input = prompt("How old are you");
//         if (isNaN(input)){
//             throw new Error("Non-numeric parameters are not allowed");
//         } 
        
//         if(!input){
//             throw new Error("The field is empty! Please enter your age");   
//         } 

//         let age = parseInt(input);
//         if (age < 14) {
//             throw new Error("You have to be older to watch this movie");  
//         }
//         alert("You have access to watch the movie");
//     } catch (error) {
//         alert(`Error: ${error.message}`);
//     }   
// }
// checkAge();

//Task3
// class MonthException extends Error{
//     constructor(message) {
//         super(message);
//         this.name = 'MonthException';
//     }
// }

// function showMonth(month){
//     const months = 
//     [
//     'January', 'February', 'March', 'April',
//     'May', 'June', 'July', 'August',
//     'September', 'October', 'November', 'December'
//     ];

//     if(month >= 1 && month <= 12){
//         return months[month - 1];
//     } else {
//         throw new MonthException('Incorrect month number');
//     }
// }

// try {
//     console.log(showMonth(5));
//     console.log(showMonth(14)); 
// } catch (error) {
//     console.log(`${error.name}: ${error.message}`);
// }

//Task 4
// class UserException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'UserException';
//     }
// }

// function showUser(id) {
//     if(id < 0) {
//         throw new UserException(`ID must not be negative: ${id}`);
//     } 
//     return {id};
// }

// function showUsers(ids) {
//     const validIDs = [];
//     for (let i = 0; i < ids.length; i++) {
//         try {
//             const user = showUser(ids[i]); 
//             validIDs.push(user);
//         } catch (error) {
//             console.error(`${error.name}: ${error.message}`);
//         }
//     }
//     return validIDs;
// }
// const result = showUsers([7, -12, 44, 22])
// console.log(result);