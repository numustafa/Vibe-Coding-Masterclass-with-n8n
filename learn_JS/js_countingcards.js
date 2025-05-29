/* Classic Example of Black jack counting cards. how this Function works:
When you see a low card, count goes up, and when you see a high card, count goes down.
When the count is positive, it means there are more low cards left in the deck, which is good for the player. This is when player should increase their bet.
When the count is negative, it means there are more high cards left in the deck, which is good for the dealer. This is when player should decrease their bet.
When the count is zero, it means the deck is neutral, and the player should bet normally.
*/

// Using switch statement, what cards are high and low, how the count behaves and returns current count val and player should hold or bet.

let count = 0;
function countCards(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++; // Low cards increase the count by +1
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--; // High cards decrease the count by -1
            break;
    }
    let holdbet = "hold";
    if(count >0){
        holdbet = "bet"; // If count is positive, player should bet
        console.log(`Count is ${count}, Player should: ${holdbet}`);
    }else if(count <= 0){
        holdbet = "hold"; // If count is zero or negative, player should hold
        console.log(`Count is ${count}, Player should: ${holdbet}`);
    }
    return [count, holdbet];
}
console.log(countCards(2)); // Count is 1, Player should: bet
console.log(countCards(3)); // Count is 2, Player should: bet
console.log(countCards(7)); // Count is 2, Player should: bet
console.log(countCards(10)); // Count is 1, Player should: bet
console.log(countCards('K')); // Count is 0, Player should: hold
console.log(countCards('A')); // Count is -1, Player should: hold




