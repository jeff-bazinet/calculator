/* Number Buttons */
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    /* Number Buttons */
    if (button.classList.contains('btn-number')) {
      console.log(button.textContent)
      displayText += button.textContent;
      renderDisplay(displayText);
    }

    /* Operator Buttons */
    if (button.classList.contains('btn-operator')) {
      console.log(`btn-operator: ${button.id}`);
      switch(button.id){
        case 'btn-add':
            console.log('add')
            numbers.push(displayText)
            console.log(numbers)
      }
    }
  });
});
