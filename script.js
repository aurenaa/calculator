let number1 = "";
let number2 = "";
let operator = "";
let isSecondNumber = false;
let calculated = false;
let result;

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

function clearEverything() {
    number1 = "";
    number2 = "";
    operator = "";
    calculated = false;
    isSecondNumber = false;
    display.textContent = "";
    operand1.textContent = "";
    operand2.textContent = "";
    screenOperator.textContent = "";
    screenResult.textContent = "";
}

function updateDisplay() { //for backspace
    display.innerHTML = "";
    if (number1) {
        display.appendChild(operand1);
    }
    if (operator) {
        display.appendChild(screenOperator);
    }
    if (number2) {
        display.appendChild(operand2);
    }
}

function computeAndShowResult() { //computing after pressing a new operator
    display.innerHTML = "";
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    const result = operate(number1, number2, operator);
    number1 = result;
    number2 = "";
    operand1.textContent = number1;
    display.appendChild(operand1);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.innerHTML) {
            case "C":
                clearEverything();
                break;
            case "←":
                if (calculated) { //only the final result needs to be cleared
                    clearEverything(); 
                    break;
                } //if there is a second number delete it first
                if (operand2.textContent != "") {
                    number2 = number2.slice(0, -1);
                    operand2.textContent = number2;
                } //if there is no second number but there is an operator delete it
                else if (screenOperator.textContent !== ""){
                    operator = "";
                    screenOperator.textContent = "";
                } //if there is no second number and no operator, delete the first one
                else {
                    number1 = number1.slice(0, -1);
                    operand1.textContent = number1;
                    if (number1 == "" || operand1 == "") { //backspace-ing the whole expression
                        clearEverything();
                    }
                }
                updateDisplay();
                break;
            case "÷":
                if (operator){
                    computeAndShowResult();
                }
                operator = "÷";
                screenOperator.textContent = "÷";
                display.appendChild(screenOperator);
                isSecondNumber = true;
                break;
            case "x":
                if (operator){
                    computeAndShowResult();
                }
                operator = "x";
                screenOperator.textContent = "x";
                display.appendChild(screenOperator);
                isSecondNumber = true;
                break;
            case "-":
                if (operator) {
                    computeAndShowResult();
                }
                operator = "-";
                screenOperator.textContent = "-";
                display.appendChild(screenOperator);
                isSecondNumber = true;
                break;
            case "+":
                if (operator){
                    computeAndShowResult();
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
                    const resultRaw = operate(number1, number2, operator);
                    const result = Number(resultRaw.toFixed(10));
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
                if (!isSecondNumber) {
                    number1 += button.innerHTML;
                    operand1.textContent = number1;
                    display.textContent = number1;
                    console.log("Number1: ", number1);
                } else {
                    number2 += button.innerHTML;
                    operand2.textContent = number2;
                    display.textContent = number1 + operator + number2;
                    console.log("Number2 :", number2);
                }
                break;
        }
    });
});