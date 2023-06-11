let num1 = 12
let operator = '/'
let num2 = 15

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