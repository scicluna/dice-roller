//This function lets me total an array
function addArray(array){
    total = 0
    for (let i of array){
        total += i
    }
    return total
}

//declaring some globals
plusFlag = "off"
explodeFlag = "off"
dropFlag = "off"
minusFlag ="off"
splicedDice =[]

//splices the dice string into an array
function spliceDice(string){
    splicedDice = string.split(/[-+,r,d,!]/g)
    
    if (string.includes('+')){
        plusFlag = "on"
    }

    if (string.includes('-')){
        minusFlag = "on"
    }

    if (string.includes('!')){
        explodeFlag = "on"
    }

    if (string.includes('r')){
        dropFlag = "on"
    }
    return splicedDice
}

//main function - could probably do with some helper functions to replace the extraneous code//
//does literally everything from handling exploding dice, to dropped dice, to adding numbers//
function dicePlug(size, quantity, drop, num){
    let diceArray =[]

    if (explodeFlag == "on") {
        for (let i=0; i<quantity; i++){
            let rollDice = Math.ceil(Math.random()*size)
    
            if (rollDice){
                if (rollDice == size){
                    i--
                    console.log("boom")
                }
            diceArray.push(rollDice)
            }
    }
}
    else {
    for (let i=0; i<quantity; i++){
        let rollDice = Math.ceil(Math.random()*size)

        if (rollDice){
        diceArray.push(rollDice)
        }
    }
}

if (dropFlag == "on"){
    var diceSort = diceArray.sort((a,b) => b-a).slice(0,diceArray.length-drop)
    addArray(diceSort)
    }
    
    else{
    var diceSort = diceArray.sort((a,b) => b-a)
    addArray(diceSort)

    }
console.log(total)
console.log(splicedDice)
if (plusFlag == "on"){
    total = parseInt(total) + parseInt(num)
}

if (minusFlag == "on") {
    total = parseInt(total) - parseInt(num)
}
console.log(total)
console.log("plus",plusFlag)
console.log("minus",minusFlag)
document.getElementById("adice").value = diceArray;
document.getElementById("total").value = total;
plusFlag = "off"
minusFlag ="off"
explodeFlag = "off"
dropFlag = "off"
}


const liveDice = () => {
    let splicedAndDiced = [];

    //Splice the String
    const spliceAndDice = (string) => {
        {
            splicedAndDiced = string.split(/[-+,r,d,!]/g)
            
            if (string.includes('+')){
                plusFlag = "on"
            }
        
            if (string.includes('-')){
                minusFlag = "on"
            }
        
            if (string.includes('!')){
                explodeFlag = "on"
            }
        
            if (string.includes('r')){
                dropFlag = "on"
            }
            return splicedAndDiced
        }
    };
    //Declare Doms//
    const diceString = document.getElementById('roll')
    const diceButton = document.getElementById('')

    
}