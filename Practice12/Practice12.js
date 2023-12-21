//Task1

// function upperCase(str) {
//     let regExp = /[A-Z]/;
//     if(regExp.test(str)){
//         console.log(`"${str}" starts with uppercase character`);
//     } else {
//         console.log(`"${str}" does not start with uppercase character`);
//     }
// }

// upperCase('regexp');
// upperCase('RegExp');

//Taks 2

// function checkEmail(email) {
//     let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return console.log(regExp.test(email));
// }

// checkEmail("Qmail2@gmail.com");
// checkEmail("notAnEmail");       
// checkEmail("hello@world");      
// checkEmail(" abc@def.com ");    

//Task3
// const regex = /d(b+)(d?)/ig;
// let str = " cdbBdbsbz ";
// let findPattern = [...str.matchAll(regex)][0];
// let result = findPattern.map(el => el);
// console.log(result);

//For string " cdbBdbsbz " result [" dbBd ", " bB ", " d "]

//Task5
// function validateCardNumber(cardNum) {
//     const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/g;
//     return console.log(regex.test(cardNum));
// }
// let cardNum = "9999-9999-9999-9999";
// validateCardNumber(cardNum);

//Task6
function checkEmail(str) {
    const regex = /^[A-Za-z0-9]+([_-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    if(regex.test(str)){
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}

// Requirements :
// • Numbers (0-9).
// • Only Latin letters in uppercase (A-Z) and lowercase (a-z) cases.
// • Only “_” and “-” symbols are allowed in the email body . But they cannot be the 1st character of an email.
//  •  The symbol “-” cannot be repeated.

checkEmail('my_mail@gmail.com');
//Email is correct!
checkEmail('#my_mail@gmail.com');
//Email is not correct!
checkEmail('my_ma--il@gmail.com');
//Email is not correct!

