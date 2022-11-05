//This function lets me total an array
function addArray(array){
    total = 0
    for (let i of array){
        total += i
    }
    console.log(total)
    return total
}
//This function lets me turn a string into an array of characters. It also lets me switch on the "explodingflag" tag should the string end with an !
function deString(string){
    if (string.endsWith('!') ){
        string = string.slice(0,-1);
        explodingflag = "on"
    }
    let usingSpread = string.split('d');
    return usingSpread
}

//This function handles dropping dice. It generates and resorts an array while slicing away the desired amount of sliced die from the bottom
function dropOne(size,quantity,drop){
    let dice =[]
    
            for (let i=0; i<quantity; i++){
                let die = Math.ceil(Math.random()*size)
                dice.push(die)
        }

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

//This function handles exploding dice. I don't know why the flag works here considering that it isn't a variable - but it sure does work 
function explodingDice (size, quantity){
    let explodingdicearray = []
    for (let i=0;i<quantity;i++){
        let explodingdice = Math.ceil(Math.random()*size)
        if (explodingdice == size){
            i--
            console.log('EXPLODE')
        }
        explodingdicearray.push(explodingdice)
    }
    addArray(explodingdicearray);
    document.getElementById("adice").value = explodingdicearray;
    document.getElementById("total").value = total;
}

//This function handles the use condiotions of either exploding dice or drop dice. I don't have a solution for using both yet.
function allRoll(size, quantity, drop){
    if (explodingflag == "on"){
        explodingDice(size,quantity)
    }
    else {
        dropOne(size,quantity,drop)
    }
    explodingflag = "off"
}

explodingflag ="off"
