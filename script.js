const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operations = ['+', '-', '*', '÷', '%', '=', 'Backspace', 'Escape'];

// Calculator object which defines the data we need to store and the available methods
let calculator = {
  previousOperand: '',
  currentOperand: '',
  operation: '',
  allClear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
    this.updateDisplay();
  },
  backspace() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  },
  appendNumber(number) {
    // Do not allow more than one "." to be used.
    if (number === '.' && this.currentOperand.includes('.')) return;

    // Do not allow more than one number after the decimal place
    if (this.currentOperand[this.currentOperand.length - 2] === '.') {
      return;
    }

    // Convert to string so that we can append text instead of js converting to a number
    this.currentOperand = this.currentOperand.toString() + number.toString();
  },
  chooseOperation(operation) {
    // Only execute this operation if there is a current operand.
    if (this.currentOperand === '') return;

    // If there is a current and previous operand, then execute the operation
    if (this.previousOperand !== '') {
      calculator.operate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  },
  operate() {
    let prevNum = parseFloat(this.previousOperand);
    let currentNum = parseFloat(this.currentOperand);
    let sum;

    // Only execute if the user set both operands before clicking equals.
    if (isNaN(prevNum) || isNaN(currentNum)) return;

    switch (this.operation) {
      case '+':
        sum = prevNum + currentNum;
        sum = Number.isInteger(sum) ? sum : sum.toFixed(1);
        break;
      case '-':
        sum = prevNum - currentNum;
        sum = Number.isInteger(sum) ? sum : sum.toFixed(1);
        break;
      case '*':
        sum = prevNum * currentNum;
        sum = Number.isInteger(sum) ? sum : sum.toFixed(1);
        break;
      case '÷':
        if (currentNum === 0) {
          alert('Cannot Divide By Zero');
          sum = '';
          break;
        }
        sum = prevNum / currentNum;
        sum = Number.isInteger(sum) ? sum : sum.toFixed(1);
        break;
      case '%':
        sum = prevNum % currentNum;
        sum = Number.isInteger(sum) ? sum : sum.toFixed(1);
        break;
      default:
        return;
    }

    this.currentOperand = sum;
    this.previousOperand = '';
    this.operation = '';
  },
  updateDisplay() {
    currentOperandDisplayText.innerText = this.currentOperand;

    if (this.operation != '') {
      previousOperandDisplayText.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      previousOperandDisplayText.innerText = '';
    }
  },
  togglePlusMinus() {
    let currentOperand = this.currentOperand.toString();

    if (currentOperand.slice(0, 1) === '-') {
      // Minus exists. Remove It.
      this.currentOperand = currentOperand.slice(1);
    } else {
      // Minus does not exist. Add it.
      this.currentOperand = '-' + currentOperand;
    }
    this.updateDisplay();
  },
};

// Query Selectors for buttons and operations.

// Data attributes were used so we don't mix our styling classes with javascript.
const body = document.querySelector('body');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const backspaceButton = document.querySelector('[data-backspace]');
const allClearButton = document.querySelector('[data-all-clear]');
const plusMinusButton = document.querySelector('[data-plus-minus]');
const previousOperandDisplayText = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandDisplayText = document.querySelector(
  '[data-current-operand]'
);

body.focus();

// Event Listeners
body.addEventListener('keydown', (e) => {
  let key = e.key.toString();

  if (key === '/') key = '÷';
  if (key === 'Enter') key = `=`;

  if (numbers.includes(key)) {
    calculator.appendNumber(key);
    calculator.updateDisplay();
  }

  if (operations.includes(key)) {
    if (key === '=') {
      calculator.operate();
      calculator.updateDisplay();
    } else if (key === 'Escape') {
      calculator.allClear();
    } else if (key === 'Backspace') {
      calculator.backspace();
      calculator.updateDisplay();
    } else {
      calculator.chooseOperation(key);
      calculator.updateDisplay();
    }
  }
});

// Number button
// For each button pressed, keep a running operand and update the display
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

// Operation button
operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

// All clear button
allClearButton.addEventListener('click', () => {
  calculator.allClear();
});

// Equals button
equalsButton.addEventListener('click', () => {
  calculator.operate();
  calculator.updateDisplay();
});

// Backspace button
backspaceButton.addEventListener('click', () => {
  calculator.backspace();
  calculator.updateDisplay();
});

// Plus Minus button
plusMinusButton.addEventListener('click', () => {
  calculator.togglePlusMinus();
  calculator.updateDisplay();
});
