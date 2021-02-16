// creates an object to keep track of values
const Calculator = {
    // this displays 0 on the screen
    Display_Value: '0',
    // this will hold the first operand for any expressions, set to null to start
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold the operator, set to null to start
    operator: null,
};

// this will modify values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // checking to see if Wait_Second_Operand is true
    // set Display_Value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // this will overwrite Display_Value if the current value is 0
        // otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// this function will handle decimal points
function Input_Decimal(dot) {
    // ensures that accidental clicking of the decimal point
    // doesnn't cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // will add a decimal point if Display_Value does not already contain one
        Calculator.Display_Value += dot;
    }
}

// this function handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    // when an operator key is pressed, we will convert the current number
    // displayed on the screen to a number and then store the result in
    // Calculator.First_Operand if it doesn't exit yet
    const Value_of_Input = parseFloat(Display_Value);
    // checks if an operator already exists and if Wait_Second_Operand is true
    // then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { 
        // checks if the operator already exists
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup is performed for the operator
        // in the Perform_Calculation object and the function that matches the
        // operator is executed
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        // here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        // this will remove any trailing 0's
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

// tells the calculator how to handle the operands and operator to perform calculation
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    
    '=': (First_Operand, Second_Operand) => Second_Operand
};

// sets the calculator back to its default, starting state
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// this section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element that was clicked
    const {target} = event;
    // if the element clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    // ensures that AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})
