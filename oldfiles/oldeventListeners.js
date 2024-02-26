const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.classList.contains('btn-number')){
      
    }
    
    
    // if equation is false, then we are starting a new operation
    if (!equation) {
      

        if (!secondOperand) {
        }
      }
    }
    // equation is not null, an equation is in progress
    else {
    }
    // /* Number Buttons */
    // if (button.classList.contains('btn-number')) {
    //   displayText += button.textContent;
    //   lastButtonPressed = button.textContent;
    //   renderDisplay();
    // }

    // /* Operator Buttons */
    // if (button.classList.contains('btn-operator')) {
    //   switch (button.textContent) {
    //     case '+':
    //       if (lastButtonPressed !== '+') {
    //         let num = displayText;
    //         currentEquation.push(num);
    //         currentEquation.push('+');
    //         displayTextEquation = currentEquation;
    //         renderDisplayText(displayText);
    //         renderDisplayEquation(currentEquation);
    //         displayText = ' ';
    //         lastButtonPressed = '+';
    //         break;
    //       }
    //     case '=':
    //       console.log(typeof lastButtonPressed)
    //       if (lastButtonPressed !== typeof 'number') {
    //         // console.log(button.textContent);
    //         let num = displayText;
    //         currentEquation.push(num);
    //         currentEquation.push('=');
    //         displayTextEquation = currentEquation;
    //         renderDisplayText(displayText);
    //         renderDisplayEquation(currentEquation);
    //         displayText = ' ';
    //         lastButtonPressed = '=';
    //         break;
    //       }
    //   }
    // }
  });
});
