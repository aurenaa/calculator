let number1;
let number2;
let operator;
let isSecondNumber = false;

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
        let result = add(number1, number2);
        console.log("Add: ", result);
    }
    else if (operator == "-") {
        let result = subtract(number1, number2);
        console.log("Sub: ", result);
    }
    else if (operator == "÷") {
        let result = divide(number1, number2);
        console.log("Divide: ", result);
    }
    else if (operator == "x") {
        let result = multiply(number1, number2);
        console.log("Multiply: ", result);
    }
}

const display = document.querySelector(".screen");
const operand1 = document.createElement("div");
const operand2 = document.createElement("div");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.innerHTML) {
            case "C":
                number1 = "";
                number2 = "";
                operator = "";
                isSecondNumber = false;
                operand1.textContent = "";
                operand2.textContent = "";
                display.appendChild(operand1);
                display.appendChild(operand2);
                break;
            case "←":
                console.log("Backspace");
                operator = "←";
                operand2.textContent = "";
                display.appendChild(operand2);
                break;
            case "÷":
                console.log("Divide");
                operator = "÷";
                values.textContent = "÷";
                display.appendChild(values);
                break;
            case "x":
                console.log("Multiply");
                operator = "x";
                values.textContent = "x";
                display.appendChild(values);
                break;
            case "-":
                console.log("Subtract");
                operator = "-";
                values.textContent = "-";
                display.appendChild(values);
                break;
            case "+":
                console.log("Add");
                operator = "+";
                values.textContent = "+";
                display.appendChild(values);
                break;
            case "=":
                console.log("Equal");
                if (number1 && number2 && operator) {
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    values.textContent = operate(number1, number2, operator);
                    display.appendChild(values);
                }
                break;
            case ".":
                console.log("Decimal point");
                operator = ".";
                break;
            default:
                if (!isSecondNumber) {
                    number1 = button.innerHTML;
                    isSecondNumber = true;
                    console.log("Number 1: ", number1);
                    operand1.textContent = number1;
                    display.appendChild(operand1);
                }
                else {
                    number2 = button.innerHTML;
                    console.log("Number 2: ", number2);
                    operand2.textContent = number2;
                    display.appendChild(operand2);
                }
        }
    });
});

