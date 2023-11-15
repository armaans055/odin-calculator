let operand1 = '';
let operand2 = '';
let operatorClicked = false;
let equalsClicked = false;
let plusClicked = false;
let minusClicked = false;
let divClicked = false;
let multiClicked = false;
let displayTotal = document.querySelector('.computed-total')
let oldTotal = displayTotal.innerHTML
let zero = document.querySelector('.zero')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let addButton = document.querySelector('.add')
let subButton = document.querySelector('.sub')
let divButton = document.querySelector('.divi')
let mulButton = document.querySelector('.mul')
let clear = document.querySelector('.clear')
let equals = document.querySelector('.equals')
let deleter = document.querySelector('.delete')
let decimal = document.querySelector('.decimal')
clear.addEventListener('click',()=>{
    operand1 = ''
    operand2 = ''
    displayTotal.textContent = oldTotal
    operatorClicked = false;
    equalsClicked = false;
    minusClicked = false;
    multiClicked = false;
    divClicked = false;
})
deleter.addEventListener('click', ()=>{
    if(operand1.length <= 1){
        displayTotal.textContent = oldTotal
        operand1 = ''
        return
    }else{
    operand1 = operand1[operand1.length-1]
    displayTotal.textContent = operand1
    }
})
decimal.addEventListener('click', buttonDecimalPressed)

equals.addEventListener('click', ()=>{
    equalsClicked = true;
})
equals.addEventListener('click', equalsButtonPressed)
zero.addEventListener('click', buttonZeroPressed)
one.addEventListener('click', buttonOnePressed)
two.addEventListener('click', buttonTwoPressed)
three.addEventListener('click', buttonThreePressed)
four.addEventListener('click', buttonFourPressed)
five.addEventListener('click', buttonFivePressed)
six.addEventListener('click', buttonSixPressed)
seven.addEventListener('click', buttonSevenPressed)
eight.addEventListener('click', buttonEightPressed)
nine.addEventListener('click', buttonNinePressed)
addButton.addEventListener('click', ()=> {operatorClicked = true})
mulButton.addEventListener('click', ()=> {operatorClicked = true})
divButton.addEventListener('click', ()=> {operatorClicked = true})
subButton.addEventListener('click', ()=> {operatorClicked = true})
addButton.addEventListener('click' , buttonAddPressed)
subButton.addEventListener('click', buttonMinusPressed)
mulButton.addEventListener('click', buttonMultiPressed)
divButton.addEventListener('click', buttonDivPressed)
// function operate(a,b,operand){
//     a = parseInt(a)
//     b = parseInt(b)
//     switch(operand){
//         case '+':
//             return addition(a,b)
//         case '-':
//             return subtract(a,b)
//         case '/':
//             return divide(a,b)
//         case '*':
//             return multiply(a,b)
//     }
// }

function buttonOnePressed(){
    if(operatorClicked === false){
        operand1 += '1'
        displayTotal.textContent = operand1
    }else{
        operand2 += '1'
        displayTotal.textContent = operand2
    }
}
function buttonTwoPressed(){
    if(operatorClicked === false){
        operand1 += '2'
        displayTotal.textContent = operand1
    }else{
        operand2 += '2'
        displayTotal.textContent = operand2
    }
}
function buttonThreePressed(){
    if(operatorClicked === false){
        operand1 += '3'
        displayTotal.textContent = operand1
    }else{
        operand2 += '3'
        displayTotal.textContent = operand2
    }
}
function buttonFourPressed(){
    if(operatorClicked === false){
        operand1 += '4'
        displayTotal.textContent = operand1
    }else{
        operand2 += '4'
        displayTotal.textContent = operand2
    }
}
function buttonFivePressed(){
    if(operatorClicked === false){
        operand1 += '5'
        displayTotal.textContent = operand1
    }else{
        operand2 += '5'
        displayTotal.textContent = operand2
    }
}
function buttonSixPressed(){
    if(operatorClicked === false){
        operand1 += '6'
        displayTotal.textContent = operand1
    }else{
        operand2 += '6'
        displayTotal.textContent = operand2
    }
}
function buttonSevenPressed(){
    if(operatorClicked === false){
        operand1 += '7'
        displayTotal.textContent = operand1
    }else{
        operand2 += '7'
        displayTotal.textContent = operand2
    }
}
function buttonEightPressed(){
    if(operatorClicked === false){
        operand1 += '8'
        displayTotal.textContent = operand1
    }else{
        operand2 += '8'
        displayTotal.textContent = operand2
    }
}
function buttonNinePressed(){
    if(operatorClicked === false){
        operand1 += '9'
        displayTotal.textContent = operand1
    }else{
        operand2 += '9'
        displayTotal.textContent = operand2
    }
}
function buttonZeroPressed(){
    if(operatorClicked === false){
        operand1 += '0'
        displayTotal.textContent = operand1
    }else{
        operand2 += '0'
        displayTotal.textContent = operand2
    }
}
function buttonDecimalPressed(){
    if(operatorClicked === false){
        operand1 += '.'
        displayTotal.textContent = operand1
    }else{
        operand2 += '.'
        displayTotal.textContent = operand2
    }
}
// function buttonAddPressed(){
//         let tempVal1 = +operand1
//     let tempVal2 = +operand2
//     operand1 = tempVal1 + tempVal2
//     operand1 = operand1.toString()
//     operand2 = ''
// }


function buttonAddPressed(){
    plusClicked = true;
    let tempVal1 = +operand1
    let tempVal2 = +operand2
    operand1 = tempVal1 + tempVal2
    operand1 = operand1.toString()
    operand2 = ''
    displayTotal.textContent = operand1
}

function buttonMinusPressed(){
    minusClicked = true;
    let tempVal1 = +operand1
    let tempVal2 = +operand2
    operand1 = tempVal1 - tempVal2
    operand1 = operand1.toString()
    operand2 = ''
    displayTotal.textContent = operand1
}

function buttonMultiPressed(){
    multiClicked = true;
    // let tempVal1 = +operand1
    // let tempVal2 = +operand2
    // operand1 = tempVal1 * tempVal2
    // operand1 = operand1.toString()
    // operand2 = ''
    // displayTotal.textContent = operand1
}
function buttonDivPressed(){
    divClicked = true;
    // let tempVal1 = +operand1
    // let tempVal2 = +operand2
    // operand1 = tempVal1 + tempVal2
    // operand1 = operand1.toString()
    // operand2 = ''
    // displayTotal.textContent = operand1
}
function equalsButtonPressed(){
    if (plusClicked === true){
        operand1 = +operand1 + +operand2
        operand1 = operand1.toString()
        operand2 = ''
        displayTotal.textContent = operand1
        plusClicked = false;
    }else if(minusClicked === true){
        operand1 = +operand1 - +operand2
        operand1 = operand1.toString()
        operand2 = ''
        displayTotal.textContent = operand1
        minusClicked = false;
    }else if(multiClicked === true){
        operand1 = +operand1 * +operand2
        operand1 = operand1.toString()
        operand2 = ''
        displayTotal.textContent = operand1
        multiClicked = false;
    }else if(divClicked === true){
        if(operand2 === 0){
            operand1 = ''
            operand2 = ''
            displayTotal.textContent = "u broke me :("
            operatorClicked = false;
            equalsClicked = false;
            minusClicked = false;
            multiClicked = false;
            divClicked = false;
        }else{
            operand1 = Math.round((+operand1 / +operand2) * 100)/100
            operand1 = operand1.toString()
            operand2 = ''
            displayTotal.textContent = operand1
            divClicked = false;
        }
    }else{
        displayTotal.textContent = operand1;
    }
}







let addition = (x,y) => {return x+y};
let subtract = (x,y) => {return x-y};
let multiply = (x,y) => {return x*y};
let divide = function(x,y){
    if(y === 0){
        return "Error"
    }else{
        return x/y
    }
}


function buttonOne(){

}
