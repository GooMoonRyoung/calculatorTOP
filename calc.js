//constants used for testing will be changed later/removed
let num1 
let condition
let num2 
let newVal
let hasOperator

//constants that will be applied to the page
const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const zero = document.querySelector('.zero')
const clear = document.querySelector('.clear')
const display = document.getElementById('display')

function formatNumber(number) {
    // Check if the number is a whole number
    if (number % 1 === 0) {
        return number; // Return the number as is if it's a whole number
    } else if (number.toPrecision(3).length < 10) {
        // If the number is fractional, format it to the specified number of decimal places
        return number.toPrecision(3);
    } else {
        console.log("Your value is too fucking long")
    }
}


function add(num1, num2){
    newVal = Number(num1) + Number(num2)
    display.innerHTML = formatNumber(newVal)
}

function subtract(num1, num2){
    newVal = Number(num1) - Number(num2)
    display.innerHTML = formatNumber(newVal)
}

function multiply(num1, num2){
    newVal = Number(num1) * Number(num2)
    display.innerHTML = formatNumber(newVal)
}

function divide(num1, num2){
    newVal = Number(num1) / Number(num2)
    display.innerHTML = formatNumber(newVal)
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
        if (hasOperator === true){
            display.innerHTML = ""
            hasOperator = false
        }

        if (display.innerHTML.length < 10){
            display.innerHTML += operand.innerHTML
        }
    })
})
//Detects if an operator was clicked 
operators.forEach((operator) => {
    operator.addEventListener('click', function(e){
        //If this is the first number it clears the display puts the value to memory 
        if (num1 == null){
            num1 = Number(display.innerHTML);
            condition = operator.innerHTML
            clearDisplay()
        } else if (num1 != null &&
                    display.innerHTML != ""){
            num2 = Number(display.innerHTML);
            operation(num1, condition, num2);
            condition = operator.innerHTML
            num1 = Number(display.innerHTML)
            num2 = null
            hasOperator = true
        } else if (num1 != null &&
            display.innerHTML === ""){
                alert("You are going to want to enter a 2nd number");
            }
    })
})
zero.addEventListener('click', function(e){
    if (display.innerHTML.length < 10){
        display.innerHTML += zero.innerHTML
    }
})
equals.addEventListener('click', function(e){
    if (!num1){
        return
    }
    if (!condition){
        return
    }
    if (display.innerHTML === "0"){
        alert("You know this isn't right come on")
        return
    }
    num2 = display.innerHTML
    operation(num1, condition, num2);
    num1 = null
    num2 = null
})
clear.addEventListener('click', function(e){
    clearDisplayButton();
})

function clearDisplay() {
    display.innerHTML = ""
}

function clearDisplayButton() {
    display.innerHTML = ""
    num1 = null
    num2 = null
    condition = null
    newVal = null
}