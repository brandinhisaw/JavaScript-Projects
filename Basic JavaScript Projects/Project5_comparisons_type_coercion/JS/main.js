// displays the number type on the page
document.write(typeof 3);

// displays the result of the coercion onto the page
document.write("36" + 0);

// displays false
document.write(2 == 1);

// displays the results of the math operation in the console
console.log(5 + 5)

// returns NaN, displays in NaN id
function undefinedNaN() {
    document.getElementById("NaN").innerHTML = 0/0;
}

// returns true, String is NaN, displays in IsNaN id
function stringNaN() {
    document.getElementById("IsNaN").innerHTML = isNaN('String');
}

// returns false, 007 is a number, displays in NotNaN id
function notNaN() {
    document.getElementById("NotNaN").innerHTML = isNaN('007')
}

// displays positive infinity to the PosInfin id
function posInfin() {
    document.getElementById("PosInfin").innerHTML = (3E310);
}

// displays negative infinity to the NegInfin id
function negInfin() {
    document.getElementById("NegInfin").innerHTML = (-3E310);
}

// returns true if num1 input is greater than num2, displays to GreaterThan id
function greaterThan(num1, num2) {
    document.getElementById("GreaterThan").innerHTML = (num1 > num2);
}

// returns true
function comparisonMatch() {
    document.getElementById("ComparisonMatch").innerHTML = 31 === 31;
}

// returns false, String vs. Number
function comparisonDifferent() {
    document.getElementById("ComparisonDifferent").innerHTML = 31 === "Blue";
}

// returns false, String vs. Number
function comparisonSameValue() {
    document.getElementById("ComparisonSameValue").innerHTML = "31" === 31;
}

// returns false, numbers with different values
function comparisonType() {
    document.getElementById("ComparisonSameType").innerHTML = 31 === 31000;
}

// returns false, 5 != 3
function andOperator() {
    document.getElementById("AndOperator").innerHTML = (2 == 2 && 5 == 3);
}

// returns true, 2 == 2 fulfills condition
function orOperator() {
    document.getElementById("OrOperator").innerHTML = (2 == 2 || 5 == 3);
}

// returns true, "not false"
function notOperator() {
    document.getElementById("NotOperator").innerHTML = !false;
}