/* In golf, each hole has a par, which means the number of strokes a skilled golfer is expected to take to complete the hole.
   The goal is to complete the hole in as few strokes as possible, ideally under par. 
   Depends on how far the hole is, the par has different nicknames .
   In JavaScript, we can create a simple golf game simulation where we track the number of strokes taken by the player and compare it to the par for each hole.
*/

var names = ["hole-in-one", "eagle", "birdie", "par", "bogey", "double-bogey", "Go home!"];
// Wrinting a function, with par and strockes, which returns a nicknames.

function golfScore(par, strokes){
    if (strokes == 1){
        let result = names[0];
        return result;
    }else if(strokes <= par -2){
        let result = names[1];
        return result;
    }else if(strokes == par -1){
        let result = names[2];
        return result;
    }else if(strokes == par){
        let result = names[3];
        return result;
    }else if(strokes == par +1){
        let result = names[4];
        return result;
    }else if(strokes = par + 2){
        let result = names[5];
        return result;
    }else if (strokes >= par+3){
        let result = names[6];
        return result;
    }
}

function getGolfScore(){
    try{
        const prompt = require('prompt-sync')({sigint: true}); // signal interrupt to allow Ctrl+C to exit the program (works like import in python)
        let par = parseInt(prompt("Enter the par for the hole: "));
        let strokes = parseInt(prompt("Enter the number of strokes taken: "));
        if (isNaN(par) || isNaN(strokes)) {
            throw new Error("Input is not a number");
        } else {
            return console.log(`The par is ${par} and the strokes taken are ${strokes}, and your golf score is: ${golfScore(par, strokes)}`);
        }
    } catch (error){
        console.error("An error occurred:", error.message);
        console.log("Please enter a valid number.");
        return getGolfScore(); // Retry getting input if an error occurs
    }
}
getGolfScore(); // Call the function to start the game
