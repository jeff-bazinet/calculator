# calculator
# 2024 - Jeff Bazinet

# A simple calculator application that supports the following
# Addition, Subtraction, Multiplication, Division, Modulo, Negation, All Clear and Backspace
# The layout is done in HTML and CSS using Fledbox.
# Google Fonts Noto Sans
# Fontawesome for the Backspace icon

# HTML
# The calculator is structured with a display and buttons section. Data attributes are used alongside classes to separate the styling from the javascript.

# CSS
# Flexbox is used to layout the buttons in a wrapped grid

# Javascript
# The calculator works by defining a calculator object which holds most of the data and methods needed for our project.
# Event listeners are defined for each of the buttons, classified as either numbers or operators. Special event listeners are placed for the All Clear, Backspace and Event Keys
# An event listener is also set up on the body to listen for keyboard input.
# The basic premise is that once the user has selected an operand, they can then select an operation. When an operation is selected, the user can then select another operand. Pressing Enter at this point will perform a calculation on the two operands. If a different operator is selected, the previous and current operand will be calculated prior to a new operand being available for input.
# During this time the user may clear all of the input by pressing AC or ESC, can press Backspace to remove numbers from the operand, or press +/- to toggle the operand as a negative/positive.
# The display section will include the results of the previous calculation, and the current operand.