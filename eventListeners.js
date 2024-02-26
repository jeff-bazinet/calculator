/* Number Buttons */
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    /* Number Buttons */
    if (button.classList.contains('btn-number')) {
      displayText += button.textContent;
      renderDisplayText(displayText);
    }

    /* Operator Buttons */
    if (button.classList.contains('btn-operator')) {
      // console.log(`btn-operator: ${button.id}`);
      switch (button.textContent) {
        case '+':
          let num = displayText;
          currentEquation.push(num);
          currentEquation.push('+');
          displayTextEquation = currentEquation;
          renderDisplayText(displayText);
          renderDisplayEquation(currentEquation)
          displayText = " ";
      }
    }
  });
});
