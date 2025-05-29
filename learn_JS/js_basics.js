console.log('Hello, World!');
// This is a simple JavaScript tutorial example

/* 
This is a multi-line comment
*/

/* Data Types:
1. String: Represents text, e.g., "Hello"
2. Number: Represents numeric values, e.g., 42, 3.14
3. Boolean: Represents true or false values
4. Object: Represents a collection of key-value pairs, e.g., { name: "Alice", age: 30 }   - like a dictionary in Python
5. Array: Represents a list of values, e.g., [1, 2, 3, "four"] - like a list in Python
6. Null: Represents an intentional absence of value which is different from undefined and means no value is assigned
7. Undefined: Represents a variable that has been declared but not assigned a value
8. Symbol: Represents a unique and immutable value, often used as object property keys like a unique identifier or tag (e.g: Symbol('description') is a unique symbol)
*/

// Variables (How to Define Var in JavaScript)
let name = "Alice"; // String - let can only be used in block scope and cannot be redeclared only in the same scope
const age = 30; // Number - const is used for constants and cannot be reassigned or redeclared
var isStudent = true; // Boolean - var can be used in function scope and can be redeclared (generally way to go is to use let or const, but for convenience, var is main)

var isStudent = false; // Re-declaring var is allowed
isStudent = "new value"; // Reassigning var is allowed

var b = 10; // Variable declaration - 10 is assigned to variable b (we dont say b = 10), so build on that, we can assign other data types to b
b = "Hello"; // Reassigning b to a string

console.log(name); // console.log allows u to see the output in the console
console.log(age);
console.log(isStudent);
console.log(b); // Output: Hello

var s = 7; // assigning integer 7 to var s. if we console.log s, we can see the value
console.log(s); // Output: 7
//console.log(a); // Output: ReferenceError: a is not defined (because a is not declared anywhere)
// Note: In JavaScript, variables can be declared without using var, let, or const, but this is not recommended as it creates a global variable

var a; // Declaring a variable without assigning a value 
console.log(a); // Output: Undefined (because a is declared but not assigned a value)



/* Mathematical Operations:
1. Addition: +
2. Subtraction: -
3. Multiplication: *
4. Division: /
5. Modulus: % (remainder of division)
6. Exponentiation: ** (e.g., 2 ** 3 is 2 raised to the power of 3)
7. Increment: ++ (increases a variable's value by 1)
8. Decrement: -- (decreases a variable's value by 1)
*/

var a = 10; // Assigning 10 to variable a
var b = 5; // Assigning 5 to variable b
var sum = a + b; // Addition
var difference = a - b; // Subtraction
var product = a * b; // Multiplication
var quotient = a / b; // Division
var remainder = a % b; // Modulus
var exponentiation = a ** b; // Exponentiation
a++; // Increment (a becomes 11)
b--; // Decrement (b becomes 4)
console.log("Sum:", sum); // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5

console.log("Product:", product); // Output: Product: 50
console.log("Quotient:", quotient); // Output: Quotient: 2
console.log("Remainder:", remainder); // Output: Remainder: 0

console.log("Exponentiation:", exponentiation); // Output: Exponentiation: 100000
console.log("Increment:", a); // Output: Increment: 11
console.log("Decrement:", b); // Output: Decrement: 4

a+=4; // a = a + 4 (a becomes 15) - like python's += operator
b-=2; // b = b - 2 (b becomes 2) - like python's -= operator
console.log("After += a is :", a); // Output: After += a is : 15
console.log("After -= b is :", b); // Output: After -= b is : 2








