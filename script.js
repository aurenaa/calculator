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

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.innerHTML) {
            case "C":
                console.log("Clear");
                operator = "C";
                break;
            case "←":
                console.log("Backspace");
                operator = "←";
                break;
            case "÷":
                console.log("Divide");
                operator = "÷";
                break;
            case "x":
                console.log("Multiply");
                operator = "x";
                break;
            case "-":
                console.log("Subtract");
                operator = "-";
                break;
            case "+":
                console.log("Add");
                operator = "+";
                break;
            case "=":
                console.log("Equal");
                if (number1 && number2 && operator) {
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    operate(number1, number2, operator);
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
                }
                else {
                    number2 = button.innerHTML;
                    console.log("Number 2: ", number2);
                }
        }
    });
});