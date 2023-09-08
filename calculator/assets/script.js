const display = document.getElementById('display');
// Get all calculator buttons
const buttons = document.querySelectorAll('.btn');
const equal = document.getElementById('equal');
// Initialize the current expression
let currentExpression = '';

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // Handle different button values
        if (value === 'AC') {
            // Clear the display and reset the expression
            currentExpression = '';
            display.value = '';
        } else if (value === 'DE') {
            // Delete the last character from the expression
            currentExpression = currentExpression.slice(0, -1);
            display.value = currentExpression;
        } else {
            // Append the button value to the expression
            currentExpression += value;
            display.value = currentExpression;
        }
    });
});


equal.addEventListener('click', () => {
    try {
        if (!isEmpty(currentExpression)) {
            // Evaluate the expression and display the result
            currentExpression = eval(currentExpression);
            display.value = currentExpression;
        } else {
            // Display nothing when the expression is empty
            display.value = '';
        }
    } catch (error) {
        // Handle any evaluation errors (e.g., division by zero)
        display.value = 'Error';
        currentExpression = '';
    }
});

// Helper function to check if a string is empty
function isEmpty(str) {
    return !str.trim(); // Trim whitespace and check if it's empty
}

