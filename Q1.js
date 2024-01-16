/* Q1. What are conditional statements? Explain conditional statements with syntax and examples.

Conditional statements are used in programming to solve decisions problem. If a certain condition is true execute a blocks of code and if condition is not true then execute another block of code.

There are several methods that can be used to perform Conditional Statements in JavaScript.

if 
if-else 
else if 
switch 
Ternary Operator 
*/

// 1. if (syntax):

// if(condition){
    // code 
// }
let age = 20;
if (age >= 18){
    console.log("You can Vote");
}

// 2. if-else (syntax):

// if(condition){
    // code 
// }
// else{
    // code 
// }

if (age >= 18) {
    console.log("You can Vote");
}
else {
    console.log("You can not Vote");
}

// 3. else-if (syntax):

// if(condition){
    // code 
// }
// else-if(condition){
    // code 
// }
// else{
    // code 
// }

let num = -5;
if (num > 0) {
    console.log("Number is positive");
}
else if (num < 0) {
    console.log("Number is negative");
}
else {
    console.log("Zero");
}

// 4. Switch (syntax)
// switch (key) {
//     case value1:
        // code
//         break;
//     case value2:
        // code
//         break;

//     default:
//         break;
// }
let n = 2;
switch (n) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;

    default:
        console.log("Greater than three")
        break;
}

// 5. Ternary (syntax)
// condition ? expression if condition true : expression if condition false;
const Age = 22;
Age >= 18 ? console.log("Adult") : console.log("Child") 