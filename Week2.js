let age = 25;
let isAdult = age >= 18 ? true : false;

console.log("Q1. ",isAdult); // Output: true

console.log("===========================================");

let x = 10;
let y = 5;

let addition = x + y;      
let multiplication = x * y; 
let modulus = x % y;      

console.log("Q2. Addition:", addition);         // Output= Addition: 15
console.log("Multiplication:", multiplication); // Output Multiplication: 50
console.log("Modulus:", modulus);           // Output= Modulus: 0

console.log("===========================================");

let n = 10;
let result = (n % 2 === 0) ? "Even" : "Odd";

console.log("Q3. The number is:", result);  // Output= The number is: Even

console.log("===========================================");

let numbers = [];

for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

console.log("Q4. Array: ",numbers); // Output: [1, 2, 3, 4, 5]

console.log("===========================================");

function square(num) {
    return num * num;
}

console.log("Q5. Square of 5:",square(5)); // Output: 25
console.log("Square of 10:",square(10)); // Output: 100