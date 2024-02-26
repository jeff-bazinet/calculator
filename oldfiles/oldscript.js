let equation = false;
let firstOperand = null;
let secondOperand = null;
let operator = null;
let sum = 0;


let currentEquation = [];

let lastButtonPressed = '';
let displayText = '';
let displayTextEquation = '';

function renderDisplay(displayText = '0') {
  const display = document.querySelector('.calc-display-text');
  display.textContent = displayText;
}

renderDisplay();
