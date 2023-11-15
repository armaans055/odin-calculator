let total = '';
let total2 = '';
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
clear.addEventListener('click',()=>{
    total = ''
    displayTotal.textContent = oldTotal
})
function operate(a,b,operand){
    a = Number(a)
    b = Number(b)
    switch(operand){
        case '+':
            return addition(a,b)
            

    }
}


one.addEventListener('click', ()=>{
    total += '1'
    displayTotal.textContent = total
})
two.addEventListener('click', ()=>{
    total += '2'
    displayTotal.textContent = total
})
three.addEventListener('click', ()=>{
    total += '3'
    displayTotal.textContent = total
})
four.addEventListener('click', ()=>{
    total += '4'
    displayTotal.textContent = total
})
five.addEventListener('click', ()=>{
    total += '5'
    displayTotal.textContent = total
})
six.addEventListener('click', ()=>{
    total += '6'
    displayTotal.textContent = total
})
seven.addEventListener('click', ()=>{
    total += '7'
    displayTotal.textContent = total
})
eight.addEventListener('click', ()=>{
    total += '8'
    displayTotal.textContent = total
})
nine.addEventListener('click', ()=>{
    total += '9'
    displayTotal.textContent = total
})
zero.addEventListener('click', ()=>{
    total += '0'
    displayTotal.textContent = total
})


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
