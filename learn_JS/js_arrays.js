/* Arrays:
An array is a collection of items stored at contiguous memory locations. It is a data structure that can hold multiple values of the same type.
Arrays can hold any data type, including numbers, strings, objects, and even other arrays.
*/

// Creating an array
var a;
var example = ["Nav", 2, a, true, "Naveed", 3.14, [1, 2, 3], null]; // An array with mixed data types
console.log("An array with mixed data types (example): ", example);

var nested_array = [["Ali", 19], ["Bilal", 20], ["Naveed", 21]];
console.log("A nested array (nested_array): ", nested_array);
console.log(a);

// Accessing array elements and modify them
var a = [[1,2,3], [4,5,6], [7,8,9], [[12,13,14], [15,16,17]]];
console.log("Accessing elements in a multi-dimensional array:", a);
console.log("Length of a multi-dimensional array:", a.length);
console.log("First element of an array (a list): ", a[0]);
console.log("Accessing 3rd eement of the 2 nd list in the array: ", a[1][2]);
// append an array
a.push("Naveed");
console.log("Add an element to my array :", a);
console.log("Accessing last element of the 2nd last array of a (again a list): ", a[a.length-2][1]);
console.log("Accessing the last element of the previous list: ", a[a.length-2][1][2]);
a.push("Bali");
console.log("Add another element to my array :", a);
a.pop("Bali"); // Remove the last element of the array
console.log("Remove the last element of the array :", a);
var b;
console.log(b);
a[a.length-2][1][2] = "Bilal";
console.log("Change the last element of the previous list to Bilal: ", a);
a.shift(); // Remove the first element of the array
console.log("Remove the first element of the array :", a);
a.unshift("I am back!"); // Add an element to the beginning of the array
console.log("Add an element to the beginning of the array :", a);



