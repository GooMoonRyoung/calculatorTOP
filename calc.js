//constants used for testing will be changed later/removed
let num1 = 12
let operator = '/'
let num2 = 15

//constants that will be applied to the page
const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const zero = document.querySelector('.zero')
const clear = document.querySelector('.clear')
const display = document.querySelector('#display')

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
operation(num1, operator, num2)
//adding events to all of the calculator buttons
//Detects if an operand was clicked
operands.forEach((operand) => {
    operand.addEventListener('click', function(e){
        if (display.innerHTML.length < 11){
            console.log('it works')
        }
    })
})
//Detects if an operator was clicked 
operators.forEach((operator) => {
    operator.addEventListener('click', function(e){
        console.log('your dad');
    })
})
zero.addEventListener('click', function(e){
    console.log('your sister');
})
clear.addEventListener('click', function(e){
    console.log('your brother');
})