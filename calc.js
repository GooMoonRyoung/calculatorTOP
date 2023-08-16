//constants used for testing will be changed later/removed
let num1 
let num2 

//constants that will be applied to the page
const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const zero = document.querySelector('.zero')
const clear = document.querySelector('.clear')
const display = document.getElementById('display')

let displayVal = display.innerHTML

function add(num1, num2){
    console.log((num1 + num2))
}

function subtract(num1, num2){
    console.log((num1 - num2))
}

function multiply(num1, num2){
    console.log((num1 * num2))
}

function divide(num1, num2){
    console.log((num1 / num2))
}

function operation(num1, operator, num2){
    if (operator === "+"){
        add(num1, num2);
    } else if (operator === "-"){
        subtract(num1, num2)
    } else if (operator === "*"){
        multiply(num1, num2)
    } else if (operator === "/"){
        divide(num1, num2)
    } else{
        console.log('this operation is illegal')
    }
}
//operation(num1, operator, num2)
//adding events to all of the calculator buttons
//Detects if an operand was clicked and adds it to the display if there are less
//10 characters in the display
operands.forEach((operand) => {
    operand.addEventListener('click', function(e){
        if (display.innerHTML.length < 10){
            displayVal += operand.innerHTML
            display.innerHTML = displayVal
        }
    })
})
//Detects if an operator was clicked 
operators.forEach((operator) => {
    operator.addEventListener('click', function(e){
        console.log(operator.innerHTML)
        if (num1 == null){
            num1 = Number(displayVal);
            console.log(num1)
            display.innerHTML = ""
            console.log('pass clear')
        }
        if (!(num1 == null)){
            num2 = Number(display.innerHTML);
            //num1 = calculate(num1, num2, operator.innerHTML)
            num2 = null
            display.innerHTML = num1.toString()
        }
    })
})
zero.addEventListener('click', function(e){
    console.log('your sister');
})
clear.addEventListener('click', function(e){
    clearDisplay();
})

function clearDisplay() {
    display.innerHTML = ""
}