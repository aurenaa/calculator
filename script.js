let number1 = "";
let number2 = "";
let operator;
let isSecondNumber = false;
let calculated = false;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(number1, number2, operator){
    if (operator == "+") {
        return add(number1, number2);
    }
    else if (operator == "-") {
        return subtract(number1, number2);
    }
    else if (operator == "÷") {
        if (number2 == 0){
            alert("Nice try, but division by zero is beyond the laws of mathematics — and common sense");
        }
        return divide(number1, number2);
    }
    else if (operator == "x") {
        return multiply(number1, number2);
    }
}

const display = document.querySelector(".screen");
const operand1 = document.createElement("div");
const operand2 = document.createElement("div");
const screenOperator = document.createElement("div");
const screenResult = document.createElement("div");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.innerHTML) {
            case "C":
                number1 = "";
                number2 = "";
                operator = "";
                display.textContent = "";
                isSecondNumber = false;
                break;
            case "←":
                if (screenResult.textContent != "") {
                    number1 = "";
                    number2 = "";
                    operator = "";
                    display.textContent = "";
                    isSecondNumber = false;
                    break;
                }
            
                if (isSecondNumber && number2 !== "") {
                    number2 = number2.slice(0, -1);
                    operand2.textContent = number2;
                    display.textContent = number1 + operator + number2;
                } else if (!isSecondNumber && number1 !== "") {
                    number1 = number1.slice(0, -1);
                    operand1.textContent = number1;
                    display.textContent = number1;
                }
                break;
            case "÷":
                if (operator){
                    display.textContent = "";
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    const result = operate(number1, number2, operator);
                    screenResult.textContent = result;
                    display.appendChild(screenResult);
                    number1 = result;
                    number2 = "";
                    screenOperator.textContent = "÷";
                    display.appendChild(screenOperator);
                    isSecondNumber = false;
                }
                operator = "÷";
                screenOperator.textContent = "÷";
                display.appendChild(screenOperator);
                isSecondNumber = true;
                break;
            case "x":
                if (operator){
                    display.textContent = "";
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    const result = operate(number1, number2, operator);
                    screenResult.textContent = result;
                    display.appendChild(screenResult);
                    number1 = result;
                    number2 = "";
                    screenOperator.textContent = "x";
                    display.appendChild(screenOperator);
                    isSecondNumber = false;
                }
                operator = "x";
                screenOperator.textContent = "x";
                display.appendChild(screenOperator);
                isSecondNumber = true;
                break;
            case "-":
                if (operator){
                    display.textContent = "";
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    const result = operate(number1, number2, operator);
                    screenResult.textContent = result;
                    display.appendChild(screenResult);
                    number1 = result;
                    number2 = "";
                    screenOperator.textContent = "-";
                    display.appendChild(screenOperator);
                    isSecondNumber = false;
                }
                else {
                    operator = "-";
                    screenOperator.textContent = "-";
                    display.appendChild(screenOperator);
                    isSecondNumber = true;
                    break;
                }
            case "+":
                if (operator){
                    display.textContent = "";
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    const result = operate(number1, number2, operator);
                    screenResult.textContent = result;
                    display.appendChild(screenResult);
                    number1 = result;
                    number2 = "";
                    screenOperator.textContent = "+";
                    display.appendChild(screenOperator);
                    isSecondNumber = false;
                }
                operator = "+";
                screenOperator.textContent = "+";
                display.appendChild(screenOperator);
                isSecondNumber = true;
                break;
            case "=":
                console.log("Equal");
                if (number1 && number2 && operator) {
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    const result = operate(number1, number2, operator);
                    screenResult.textContent = result;
                    display.textContent = "";
                    display.appendChild(screenResult);
                    calculated = true;
                }
                break;
            case ".":
                operator = ".";
                break;
            default:
                if (calculated) {
                    number1 = "";
                    number2 = "";
                    operator = "";
                    isSecondNumber = false;
                    display.textContent = "";
                    justCalculated = false;
                }
                if (!isSecondNumber) {
                    if (!operator) {
                        number1 += button.innerHTML;
                        console.log("Number 1: ", number1);
                        operand1.textContent = number1;
                        display.appendChild(operand1);
                    }
                }
                else {
                    number2 += button.innerHTML;
                    console.log("Number 2: ", number2);
                    operand2.textContent = number2;
                    display.appendChild(operand2);
                }
        }
    });
});