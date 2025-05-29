// string concatenation
var myname = "Naveed";
var mystring = "Hi! My name is "+ myname + " How can I be of any help?";
console.log("The string concatenation is: ", mystring); // Output: The string concatenation  

// Append to string
var adj = "awsome!";
var str2 = "How are you? You Look "
str2 += adj;
console.log("The appended string is: ", str2); // Output: The appended string is: How are you?awsome!

str2length = str2.length; // Get the length of the string
console.log("The length of the string is (no of characters and spaces): ", str2length); // Output: The length of the string is: 30 no of characters and spaces

// JS is 0-indexed, so the first character is at index 0 and the last character is at index length - 1
console.log("The first character of the string is: ", str2[0]); // Output: The first character of the string is: H
console.log("The last character of the string is: ", str2[str2.length - 1]); // Output: The last character of the string is: !

// Function Example with strings
function wordblanks(myNoun, myAdj, myVerb, myAdverb){
    var result = "";
    result += "The "+ " " + myAdj + " " + myNoun + " " + myVerb + " " + "to the store "+ myAdverb + ".";
    return result; 
}
console.log(wordblanks("dog", "big", "ran", "quickly"));
console.log(wordblanks("man", "grumpy old", "dragged his car", "slowly"));