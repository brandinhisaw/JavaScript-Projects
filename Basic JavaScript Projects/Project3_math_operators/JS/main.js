// adds the number inputs together and displays the result in Math
function addTwo (num1, num2) {
    var result = num1 + num2;
    document.getElementById("Math").innerHTML = num1 + " plus " + num2 + " equals " + result;
}

// subtracts the second number input from the first and displays the result in Math2
function subtractTwo(num1, num2) {
    var result = num1 - num2;
    document.getElementById("Math2").innerHTML = num1 + " subtract " + num2 + " equals " + result;
}

// multiplies the number inputs and displays the result in Math3
function multiplyTwo(num1, num2) {
    var result = num1 * num2;
    document.getElementById("Math3").innerHTML = num1 + " multiplied by " + num2 + " equals " + result;
}

// divides the first number input by the second and displays the result in Math4
function divideTwo(num1, num2) {
    var result = num1 / num2;
    document.getElementById("Math4").innerHTML = num1 + " divided by " + num2 + " equals " + result;
}

// performs multiple math operations and displays the result in MoreMath
function mathFunction() {
    var result = (2 * 3) - 1 + (12 / 3);
    document.getElementById("MoreMath").innerHTML = "2 multiplied by 3, subtracted by 1, plus 12 divided by 3 is equal to " + result;
}

// divides 100 by 9 and displays the remainder in Remainder
function remainder() {
    var result = 100 % 9;
    document.getElementById("Remainder").innerHTML = "When you divide 100 by 9, a remainder of " + result + " is left.";
}

// flips a number from positive to negative or negative to positive, displays in PosNeg
function flipPosNeg(num) {
    document.getElementById("PosNeg").innerHTML = "When the sign for " + num + " is flipped, you get " + -num;
}

// takes the input into a new var, increments it, and displays it in Increment
function increment(num) {
    var newNum = num;
    newNum++;
    document.getElementById("Increment").innerHTML = num + " incremented is " + newNum;
}

// takes the input into a new var, decrements it, and displays it in Decrement
function decrement(num) {
    var newNum = num;
    newNum--;
    document.getElementById("Decrement").innerHTML = num + " decremented is " + newNum;
}

// generates a random number between 0 and 100 and displays it in Random
function randomNum() {
    document.getElementById("Random").innerHTML = "Random Number Generated: " + (Math.random() * 100);
}

// displays the Math object PI in PI
function displayPI() {
    document.getElementById("PI").innerHTML = "Pi is " + Math.PI;
}