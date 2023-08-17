//constants used for testing will be changed later/removed
let num1 
let condition
let num2 

//constants that will be applied to the page
const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
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
    } else if (operator === "x"){
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
        //If this is the first number it clears the display puts the value to memory 
        if (num1 == null){
            num1 = Number(displayVal);
            condition = operator.innerHTML
            console.log(condition)
            clearDisplay()
        }
    })
})
zero.addEventListener('click', function(e){
    console.log('your sister');
})
equals.addEventListener('click', function(e){
    num2 = displayVal
    operation(num1, condition, num2);
})
clear.addEventListener('click', function(e){
    clearDisplay();
})

function operatorConvertor(x) {
    if (x = '+'){
        return 1
    }else if (x = '-'){
        return 2
    }else if (x = 'x'){
        return 3
    }else if (x = '/'){
        return 4
    }
}

function clearDisplay() {
    display.innerHTML = ""
    displayVal = ""
}