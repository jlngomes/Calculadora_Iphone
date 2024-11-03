let display = document.getElementById("display");
let currentInput = "";
let currentOperation = null;
let previousInput = "";

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    currentOperation = null;
    updateDisplay("0");
}

function updateDisplay(value) {
    display.textContent = value;
}

function inputNumber(number) {
    if (currentInput.length < 9) {
        currentInput += number;
        updateDisplay(currentInput);
    }
}

function inputSymbol(symbol) {
    if (symbol === "+/-") {
        currentInput = String(-parseFloat(currentInput));
        updateDisplay(currentInput);
    } else if (symbol === "%") {
        currentInput = String(parseFloat(currentInput) / 100);
        updateDisplay(currentInput);
    } else {
        if (currentOperation && currentInput) {
            calculate();
        }
        previousInput = currentInput;
        currentInput = "";
        currentOperation = symbol;
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
 
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString().slice(0, 9);
    currentOperation = null;
    previousInput = "";
    updateDisplay(currentInput);
}