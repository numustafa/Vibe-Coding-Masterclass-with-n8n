/* An if statement is a conditional statement that executes a block of code if a specified condition is true. It is used to make decisions in code based on certain conditions. The syntax is as follows:
if (condition) {
    // code to be executed if the condition is true
}

An if statement can also include an else block, which executes a block of code if the condition is false. The syntax is as follows:
if (condition) {
    // code to be executed if the condition is true
}else {
    // code to be executed if the condition is false
}

An if statement can also include an else if block, which allows for multiple conditions to be checked in sequence. The syntax is as follows:
if (condition1) {
    // code to be executed if condition1 is true
}else if (condition2) {
    // code to be executed if condition2 is true
}else {
    // code to be executed if both conditions are false
}   

An if statement can also include a switch statement, which allows for multiple conditions to be checked in sequence. The syntax is as follows:
switch (expression) {
    case value1:
        // code to be executed if expression equals value1
        break;
    case value2:
        // code to be executed if expression equals value2
        break;
    default:
        // code to be executed if expression does not match any case
}
*/
let result;
function trueOrFalse(wasthatTrue){
    if (wasthatTrue){
        return "Yes! That was true!";
    }else{
        return "No! That was false!";
    }
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

console.log(result);

function testStrict(val){
    if(val == 12){
        let result = "Equal to 12";
        return result;
    }else{
        return false;
    }
}
console.log(`We try to check with 10 and our function returns ${testStrict(10)}`); 
console.log(`We try to check with 12 and our function returns ${testStrict(12)}`);
console.log(`We try to check with "12" and our function returns ${testStrict("12")}`); 
console.log(result);

function testStrictAgain(val){
    let result; 
    if(val === 12){
        result = true;
        return result;
    }else if(val == 12){
        result = "12 is a string";
        return result;
    }else {
        result = false;
        return result;
    }
}
console.log(`We try to check with 10 and our function returns ${testStrictAgain(10)}`);
console.log(`We try to check with 12 and our function returns ${testStrictAgain(12)}`);
console.log(`We try to check with "12" and our function returns True b/c ${testStrictAgain("12")}`);
console.log(`We try to check with "Naveed" and our function returns ${testStrictAgain("Naveed")}`);
console.log(result);
console.log(result);






// chaining if-else statements
function chainIfElse(num){
    if (num < 5){
        let result = "Tiny";
        return result;
    }else if (num >= 5 && num < 10){
        let result = "Small";
        return result;
    }else if (num >= 10 && num < 15){
        let result = "Medium";
        return result;
    } else if(num >=15 && num < 20){
        let result = "Large";
        return result;
    }else{
        let result = "Huge";
        return result
    }
}
function getAndProcessInput(){
    try {
    const prompt = require('prompt-sync')({sigint: true}); // signal interrupt to allow Ctrl+C to exit the program (works like import in python)
    // Get user input and use your function
    const userInput = prompt('Enter a number: ');
    const num = Number(userInput);
    // check if user input is a number
    if (isNaN(num)) {
        throw new Error("Input is not a number");
    } else {
        // If input is valid, use the function
        console.log(`The number ${num} is ${chainIfElse(num)}`);
    }
} catch (error) {
    console.error(error.message);
    console.log("Please enter a valid number.");
    return getAndProcessInput(); // Recursively call the function to get valid input
} 
}
getAndProcessInput(); // Call the function to get user input and process it



