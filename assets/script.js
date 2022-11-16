//DOMS
const resultsList = document.querySelector(".results")
const totalsList = document.querySelector(".totals")
const rollInput = document.querySelector(".roll")
const rollBtn = document.querySelector(".roller")




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
dicesort = []

//splices the dice string into an array
function spliceDice(string){
    splicedDice = string.split(/[-+,r,d,!]/)
    
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
     diceSort = diceArray.sort((a,b) => b-a).slice(0,diceArray.length-drop)
     addArray(diceSort)
    }
    else{
     diceSort = diceArray.sort((a,b) => b-a)
     addArray(diceSort)
    }
    console.log(total)
    console.log(num)
    if (plusFlag == "on"){
        total = parseInt(total) + parseInt(num)
    }
    
    if (minusFlag == "on") {
        total = parseInt(total) - parseInt(num)
    }
    console.log(total)

plusFlag = "off"
minusFlag ="off"
explodeFlag = "off"
dropFlag = "off"

return diceSort
}

//Run on button press
rollBtn.addEventListener('click', function(){
    //init function
    spliceDice(rollInput.value);
    dicePlug(splicedDice[1],splicedDice[0],splicedDice[2], splicedDice[splicedDice.length-1]);
    //Create an Li
    const newLi = document.createElement('LI');
    //liContent must equal the content I want to display 
    const liContent = document.createTextNode(diceSort)
    newLi.appendChild(liContent);
    //Attach the Li to the results list
    resultsList.appendChild(newLi);
    //Repeat for Total 
    const newLi2 = document.createElement("LI");
    const liContent2 = document.createTextNode(total);
    newLi2.appendChild(liContent2);
    totalsList.appendChild(newLi2);
});
//Run on enter press
rollInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    //init function
    spliceDice(rollInput.value);
    dicePlug(splicedDice[1],splicedDice[0],splicedDice[2], splicedDice[splicedDice.length-1]);
    //Create an Li
    const newLi = document.createElement('LI');
    //liContent must equal the content I want to display 
    const liContent = document.createTextNode(diceSort)
    newLi.appendChild(liContent);
    //Attach the Li to the results list
    resultsList.appendChild(newLi);
    //Repeat for Total 
    const newLi2 = document.createElement("LI");
    const liContent2 = document.createTextNode(total);
    newLi2.appendChild(liContent2);
    totalsList.appendChild(newLi2);
    }
});