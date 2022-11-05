//This function lets me total an array
function addArray(array){
    total = 0
    for (let i of array){
        total += i
    }
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

//This function handles exploding/dropping dice
function dropExplode(size, quantity,drop){
    let dice =[]
    if (explodingflag == "on"){
    for (let i=0;i<quantity;i++){
        let die = Math.ceil(Math.random()*size)
        if (die == size){
            i--
            console.log('EXPLOSIIIOOOON')
        }
        dice.push(die)
    }
}
    else {
    for (let i=0; i<quantity; i++){
        let die = Math.ceil(Math.random()*size)
        dice.push(die)
    }
}
if (drop !== undefined){
var diceSort = dice.sort((a,b) => b-a).slice(0,dice.length-drop)
addArray(diceSort)
document.getElementById("adice").value = dice;
document.getElementById("total").value = total;
}
else {
var diceSort = dice.sort((a,b) => b-a)
addArray(diceSort)
document.getElementById("adice").value = dice;
document.getElementById("total").value = total;
}
explodingflag = "off"
}


