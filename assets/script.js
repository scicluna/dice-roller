var diceSize = 6
var diceQuantity = 3
var diceResults = []

function rollDice(){
    result = Math.ceil((Math.random())*diceSize)
    return result
}

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

rollAll();
console.log(diceResults)