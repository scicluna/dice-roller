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
for (i=0;i<diceResults.length;i++){
    total = total + diceResults[i]
}
console.log(total)
}

//Run
rollAll();
console.log(diceResults)