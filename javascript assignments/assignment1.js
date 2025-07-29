// 1 Variables

let myName = "Bharath";
let myAge = 25;
let likesJavaScript = true;
let nullValue = null;
let undefinedVar;

// 2 object

let person = {
    name: "Bharath",
    age: 25
};

let favoriteColors = ["Blue", "Black", "Green"];

console.log("My Name:", myName);
console.log("My Age:", myAge);
console.log("Do I like JavaScript?", likesJavaScript);
console.log("Null Value:", nullValue);
console.log("Undefined Variable:", undefinedVar);
console.log("Person Object:", person);
console.log("Favorite Colors:", favoriteColors);

//3  Arithmetic Operators

let a = 10, b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

// 4 Assignment Operators

let x = 5;
x += 3; 
console.log("x after += 3:", x);
x *= 2; 
console.log("x after *= 2:", x);

// 5  Comparison Operators

console.log("5 == '5':", 5 == '5');     
console.log("5 === '5':", 5 === '5'); 
console.log("10 != 5:", 10 != 5);
console.log("7 < 10:", 7 < 10);
console.log("15 > 8:", 15 > 8);
console.log("4 <= 4:", 4 <= 4);
console.log("9 >= 10:", 9 >= 10);

// 6 Check if number is positive, negative, or zero

let number = -17;
if (number > 0) {
    console.log(number, "is positive");
} else if (number < 0) {
    console.log(number, "is negative");
} else {
    console.log(number, "is zero");
}

// 7 Categorize a person's age

let age = 17;
if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// 8 For loop to print numbers 1 to 10

console.log("For Loop (1 to 10):");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 9 While loop to print even numbers between 1 and 20

console.log("While Loop (Even numbers from 1 to 20):");
let i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// 10 For of loop

console.log("Characters in my name:");
for (let char of myName) {
    console.log(char);
}
