let currentOperation = {
  sum: 0,
  previousNumber: null,
  currentNumber: null,
  previousOperator: null,
  currentOperator: null,
};

let sum = 0;
let displayText = '';

function renderMenu() {}

function renderDisplay(displayText = '0') {
  const display = document.querySelector('.calc-display');
  display.textContent = displayText;
}

function renderButtons() {}
function renderHistory() {}
function renderMemory() {}

renderDisplay();
add(1, 2);
