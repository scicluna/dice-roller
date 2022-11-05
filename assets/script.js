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

function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
     if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
   }

function deString(string){
    if (string.endsWith('!') ){
        string = string.slice(0,-1);
        flag = true
    }

    let usingSpread = string.split('d');
    return usingSpread
}


function dropOne(size,quantity,drop){
    let dice =[]
    console.log(flag)
    if (flag === true){
        for (let i=0; i<quantity; i++){
            let die = Math.ceil(Math.random()*size)
            dice.push(die)
            if (die === size){
                i--
                console.log("Explode")
            }
        }
        console.log(dice)
    }
        else {
            for (let i=0; i<quantity; i++){
                let die = Math.ceil(Math.random()*size)
                dice.push(die)
        }}

    console.log(dice)
    if (drop !== undefined){
    var diceSort = dice.sort((a,b) => b-a).slice(0,dice.length-drop)
    console.log(dice)
    console.log(diceSort)
    addArray(diceSort)
    document.getElementById("adice").value = dice;
    document.getElementById("total").value = total;
    }
    else {
    var diceSort = dice.sort((a,b) => b-a)
    console.log(dice)
    console.log(diceSort)
    addArray(diceSort)
    document.getElementById("adice").value = dice;
    document.getElementById("total").value = total;
    }
}



function maxLoop (size, quantity){
    let things = []
    if (flag == true){
    for (let i=0; i<quantity; i++){
        let thing = Math.ceil(Math.random()*size)
        things.push(thing)
        if (thing === size){
            i--
            console.log("Explode")
        }
    }
    console.log(things)
}
    else {
        for (let i=0; i<quantity; i++){
            let thing = Math.ceil(Math.random()*size)
            things.push(thing)
    }
    console.log(things)
}
}

var flag = false 
