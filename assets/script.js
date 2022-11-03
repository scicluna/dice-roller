/* One way to do it all

//Variables that will be able to be filled out on our webpage later
var diceSize = 6
var diceQuantity = 3
//Placeholder for the results and eventual display
var diceResults = []

//Function that rolls a single dice
function rollDice(){
    result = Math.ceil((Math.random())*diceSize)
    return result
}
//Function that rolls multiple dice and totals them
function rollAll(){
    var total = 0
for (i=0;i<diceQuantity;i++){
    result = rollDice();
    diceResults.push(result)
}
for (let i of diceResults){
    total += i
}
console.log(total)
return total
}

//Run
rollAll();
console.log(diceResults)

*/

//better way?
function addArray(array){
    total = 0
    for (let i of array){
        total += i
    }
    console.log(total)
    return total
}

function diceRoll(size,quantity){
    let dice =[]
    for (i=0;i<quantity;i++){
        let die = Math.ceil(Math.random()*size)
        dice.push(die)
    }
    console.log(dice)
    addArray(dice);
    document.getElementById("dice").value = dice;
    document.getElementById("total").value = total;
}


