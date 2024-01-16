// Q4. Generate number between any 2 given number.
// Ex
//  const num1 = 10
//  const num2 = 25;
// Output: 11, 12, 13, ...., 25

const num1 = 10;
const num2 = 25;

if (num1 > num2) {
    console.log("num1 should be less than or equal to num2");
}
else {
    for (let i = num1+1; i <= num2; i++) {
        console.log(i);
    }
}