let currentEquation = [];

let sum = 0;
let displayText = '';
let displayTextEquation = '';

function renderDisplayText(displayText = '0') {
  const display = document.querySelector('.calc-display-text');
  display.textContent = displayText;
}

function renderDisplayEquation(displayEquation) {
  const displayEq = document.querySelector('.calc-display-equation');
  displayEq.textContent = displayTextEquation.join(" ");
}

renderDisplayText();
renderDisplayEquation();
add(1, 2);
