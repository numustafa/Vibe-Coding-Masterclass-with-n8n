// Function Example with strings
function wordblanks(myNoun, myAdj, myVerb, myAdverb){
    var result = "";
    result += "The "+ " " + myAdj + " " + myNoun + " " + myVerb + " " + "to the store "+ myAdverb + ".";
    return result; 
}
console.log(wordblanks("dog", "big", "ran", "quickly"));
console.log(wordblanks("man", "grumpy old", "dragged his car", "slowly"));

var result;    // this is a global var and is undefined at this point, however, it still be used locally for different purposes and local var takes precedence over global var
console.log(result); 

function ourfunction(a,b){
    var result = a - b;
    return console.log(`The result of the function ${a} - ${b} is: `, result);
}
ourfunction(10, 5); // Output: The result of the function 10 - 5 is: 5

console.log(result)

function ourfunct2(a,b){
    var result = a+b
    return console.log(`The result of ${a} + ${b} is:`, result);    
}
ourfunct2(10, 5); // Output: The result of 10 + 5 is: 15
console.log(result);

function times5(num){
    var result = num*5;
    return console.log(`The ${num} times 5 is: `, result);
}
times5(10); // Output: The 10 times 5 is: 50
console.log(result);

var b = [1, 2, 3, 4, 5]; 
console.log(b);

function addtoarray(array, item){
    var result = array.push(item); // push adds an element to the end of the array
    return result;
}
var a = addtoarray(b, 6); // Adds 6 to the array b
console.log(`We add ${a} and our new array is:`, b); // Output: Array after adding 6: [1, 2, 3, 4, 5, 6]

console.log(result);

function removelastelement(array){
    var result = array.pop();
    return result;
}
var c = removelastelement(b); // Removes the last element of the array b
console.log(`Array after removing the last element ${c}: `, b); // Output: Array after removing the last element: [1, 2, 3, 4, 5]

console.log(result);
function addelementtofirstindex(array, item){
    var result = array.unshift(item);
    return result;
}
console.log(`Array before adding an element to the first index: `, b);
var d = addelementtofirstindex(b, "Added to 1st index");
console.log(`Array after adding ${d} to the first index: `, b);
console.log(result);


function removefirstitem(array){
    var result = array.shift();
    return result;
}
var e = removefirstitem(b); 
console.log(`We removed the first item "${e}" from array b:`, b);
console.log(result);





