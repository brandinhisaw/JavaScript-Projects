function displayDate(aInput, bInput) {
    // assigns variabls A and B based on input declared in HTML
    var A = aInput; B = bInput;
    // finds the ID demo and changes it to the date and time
    document.getElementById("demo").innerHTML = Date();
    // concatenates A and B
    A += B;
    // finds the ID concat and changes it to var A
    document.getElementById("concat").innerHTML = A;
}