/* While Loop */

let myArray = [];

let i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log("While Loop Output:", myArray); // Output: [0, 1, 2, 3, 4]


/* For Loop (Most common type in JS)*/

// syntax for for loop (initialization; condition; increment/decrement)
let newArray = [];
for (let i = 0; i < 10; i+=2){
    newArray.push(i);
}
console.log("For Loop Output:", newArray); // Output: [0, 2, 4, 6, 8]

// for loop with odd numbers
let new2Array = [];
for (let i = 1; i<11; i+=2){
    new2Array.push(i);
}
console.log("For Loop Output with odd numbers:", new2Array); // Output: [1, 3, 5, 7, 9]

// for loop with backwards counting
let new3Array = [];
for (let i = 10; i > 0; i-=2){
    new3Array.push(i);
}
console.log("For Loop Output with backwards counting:", new3Array); // Output: [10, 8, 6, 4, 2]

let new4Array = [];
for (let item = 9; item >0; item-=1){
    new4Array.push(item);
}
console.log("For Loop Output with backwards counting (decrement by 1):", new4Array); // Output: [10, 8, 6, 4, 2, 9, 7, 5, 3, 1]


// for loop with array
let ourArray = [1, 2, 3, 4, 5];
let ourArrayOutput = 0;
for (let i = 0; i<ourArray.length; i++){
    ourArrayOutput += ourArray[i]; // Adding each element of the array to ourArrayOutput
}
console.log("For Loop Output with array:", ourArrayOutput); // Output: 15


// for loop with array 
let my2Array = [2,3,4,5,6];
let myArrayOutput = 0;
for (let i = 0; i<my2Array.length; i++){
    myArrayOutput += my2Array[i]; // Adding each element of the array to myArrayOutput
}
console.log("For Loop Output with array:", myArrayOutput); // Output: 30

// for loop for nested arrays
function multiplyall(array){
    let product = 1; // Initialize product to 1
    for (let i = 0; i < array.length; i++) {
        for (let j =0; j< array[i].length; j++){
            product *= array[i][j]; // Multiply each element of the nested array
        }
    }
    return product; // Return the final product
}

let nestedArray = [[1, 2], [3, 4], [5]];
let result = multiplyall(nestedArray);
console.log("For Loop Output with nested arrays:", result); // Output: 120 (1*2*3*4*5)


// Do-While Loop (They execute at least once and then check the condition, unlike while loops which check the condition first) 
let myDoArray = [];
let j = 10;
do {
    myDoArray.push(j);
    j++;
} while (j < 5);   // This will run first, then find out if the condition is true or false
console.log("Do-While Loop Output:", myDoArray); // Output: [10] (because the condition is false, it only runs once)
