// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples.

// Loops are control flow structures in programming. Loop is used to execute a block of code multiple times untill an condition is false. Loops help to avoid repeating the code again and again.

// Type of Loops:
// 1. For loop
// 2. While loop
// 3. Do while loop

// 1. For loop 
// Syntax:
// for(initialization; condition; updation){
    // code
// }
// Example:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. While loop 
// Syntax:
// while(condition){
    // code
// }
// Example:
let n = 1;
while (n <= 5) {
    console.log("Value of n =",n);
    n++;
}

// 3. Do-While loop 
// Syntax:
// do{
    // code
// }while(condition);
// Example:
do {
    console.log("Squre of",n,"=",n*n);
    n--;
}while(n>=1)