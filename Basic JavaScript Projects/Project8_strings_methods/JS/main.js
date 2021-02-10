// demonstrates the concat() function and displays the result
function concatString() {
    var string1 = "This is "; 
    var string2 = "a concatenated string ";
    var string3 = "combined by using the ";
    var string4 = "concat() method.";

    document.getElementById("Concat").innerHTML = string1.concat(string2, string3, string4);
}

// slices the string between positions 12 and 20
function sliceString() {
    var theString ="I sure hope this entire string is displayed and not just an out of context slice.";
    document.getElementById("Slice").innerHTML = theString.slice(12, 20);
}

// converts theNum into a string type and displays it
function numToString() {
    var theNum = 250;
    document.getElementById("NumToString").innerHTML = theNum.toString();
}

// uses the toPrecision method to display only 8 digits of theNum
function precisionNum() {
    var theNum = 4320.4320523004360
    document.getElementById("PrecisionNum").innerHTML = theNum.toPrecision(8);
}