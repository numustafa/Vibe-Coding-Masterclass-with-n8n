/* In this coding challange:
We are given a collection of records, each record contains information such as ID, and different pieces of info about the record (e.g album, artist, tracks, etc).
They all dont have the same information, some have more than others, and some have less. 

Goal: Create `updateRecordfunct` function that takes an ID, a property, and a value, and updates the record with the given ID. We should return the full collection.
    1. if value has an empty string, we should delete the property from the record.
    2. If the property is "tracks" and value is not an empty string, we should add the value to the tracks array.
keep the copy of the collection and update the original collection.
*/

// Structure of the collection => id: { property1: value1, property2: value2, ... }
let a;
let collection = {
    "2548" : {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": ["Let It Rock", "You Give Love a Bad Name"]
    },
    "2468" : {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little Red Corvette"]
    },
    "1245" : {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439" : {
        "album": "ABBA Gold"
    }
}

// keep a copy of the collection
let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecordfunct(id, prop, value) {
    if (value === "") {
        // If value is an empty string, delete the property from the record
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || []; // Ensure tracks is an array
        collection[id][prop].push(value); // Add the value to the tracks array
    } else {
        // If the property is not "tracks", update the property with the value
        collection[id][prop] = value;
    }

    return collection;
}

// Example usage:
console.log(updateRecordfunct("5439", "artist", "ABBA")); // Update artist for ID 5439
console.log(a);
console.log(updateRecordfunct("2548", "tracks", "Living on a Prayer")); // Add track to ID 2548
console.log(a);
console.log(updateRecordfunct("2468", "tracks", "test")); // Remove tracks for ID 2468
console.log(a);
console.log(updateRecordfunct("1245", "album", "Riptide")); // Update album for ID 1245

