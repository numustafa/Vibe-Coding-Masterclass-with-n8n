/* objects are similar to arrays, except we use properties to access the data,instead of index. They can be used as key-value pairs (dict in Python)*/
let a;

let car = {
    "make": "Toyota",
    "model": "Camry",
    "year": 2020,
    "is Electric": false
};
// Accessing object properties
console.log("Car make: ", car.make); // Output: Car make:  Toyota
console.log("Car model: ", car.model); // Output: Car model:  Camry
console.log("Car year: ", car.year); // Output: Car year:  2020
// Adding a new property to the object
car.color = "Red";
console.log("Updated Object : ", car); // Output: Car color:  Red
car.features = ["Air Conditioning", "Navigation System"];
console.log("Car features: ", car.features); // Output: Car features:  [ 'Air Conditioning', 'Navigation System' ]
console.log("Car color: ", car.color); // Output: Car color:  Red
// Modifying an existing property
car.year = 2021;
console.log("Updated Car year: ", car.year); // Output: Updated Car year:  2021
// Deleting a property from the object
delete car.model;
console.log("After deleting model: ", car); // Output: After deleting model:  { make: 'Toyota', year: 2021, color: 'Red' }

let new_feature = car["is Electric"];   // Accessing property using bracket notation
console.log("Car is Electric: ", new_feature); // Output: Car is Electric:  false


console.log(a);

// function using object
function phoneticlookup(val){
    let result = "";

    let lookup  = {
        "alpha": "Adams",
        "bravo": "Boston",  
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
        "golf": "George",
        "hotel": "Henry",
        "india": "Ida",
        "juliet": "John",
        "kilo": "King",
        "lima": "Lincoln",
        "mike": "Mary"
    };
    if (lookup[val]) {
        result = lookup[val];
    } else {
        result = "Not Found";
    };
    return result;
}
console.log(phoneticlookup("alpha")); // Output: Adams
