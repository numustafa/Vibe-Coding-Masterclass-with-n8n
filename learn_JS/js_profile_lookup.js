/* Coding Challange:
1- We have an array of objects as our contact list. Each object is a contact with properties like firstName, lastName, number, and likes. (key - value pairs)

2- Write a function that takes in a first name and property and returns the contact information for that person if they exist in the contact list.

3- If the contact does not exist, return a message saying so.

4- Use a loop to iterate through the contact list and find the matching contact.

5- Test your function with different names to ensure it works correctly.
*/

let contacts = [
    { firstName: "John", lastName: "Doe", number: "123-456-7890", likes: ["reading", "traveling"] },
    { firstName: "Jane", lastName: "Smith", number: "987-654-3210", likes: ["cooking", "hiking"] },
    { firstName: "Alice", lastName: "Johnson", number: "555-555-5555", likes: ["painting", "music"] },
    { firstName: "Bob", lastName: "Brown", number: "444-444-4444", likes: ["gaming", "sports"] },
    { firstName: "Charlie", lastName: "Davis", number: "333-333-3333", likes: ["photography", "writing"] },
    { firstName: "Eve", lastName: "Wilson", number: "222-222-2222", likes: [] },
    { firstName: "Frank", lastName: "Moore", number: "unknown", likes: ["fishing", "camping"] }
]

function profilelookUp(firstName, lastName, property) {
    for (let i = 0; i<contacts.length; i++){
        if (contacts[i].firstName.toLocaleLowerCase() === firstName.toLocaleLowerCase() && contacts[i].lastName.toLocaleLowerCase() === lastName.toLocaleLowerCase()) {
            // If the contact is found, check the requested property
            if (property === "likes") { 
                console.log(`${firstName} ${lastName}'s likes are ${contacts[i][property].length > 0 ? contacts[i][property].join(", ") : "none"}.`);
                return;
            } else if (property === "number") {
                console.log(`${firstName} ${lastName}'s number is ${contacts[i][property] === "unknown" ? "not available" : contacts[i][property]}.`);
                return;
            } else if (!contacts[i].hasOwnProperty(property)) {
                console.log(`${firstName} ${lastName} does not have a property called ${property}.`);
                return;
            } else {
                console.log(`${firstName} ${lastName}'s ${property} is ${contacts[i][property]}.`);
                return;
            }
        } 
    }
    // If we reach here, it means the contact was not found
    console.log(`Contact with name ${firstName} ${lastName} not found.`);
    return;
}

function checkProfile() {
    try {
        const prompt = require('prompt-sync')({ sigint: true }); // signal interrupt to allow Ctrl+C to exit the program (works like import in python)
        // Get user input and use your function
        const firstName = prompt('Enter first name: ').trim();
        const lastName = prompt('Enter last name: ').trim();
        const property = prompt('Enter property to look up (number, likes): ');
        
        // check if user input is a string
        if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof property !== 'string') {
            throw new Error("Input is not a string");
        } else {
            // If input is valid, use the function
            profilelookUp(firstName, lastName, property);
        }
    } catch (error) {
        console.error(error.message);
    }
}

checkProfile();

