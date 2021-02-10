var X = 100;

// function utilizing a local variable
function localFunc() {
    var Y = 20;
    console.log(X + Y);
}

// function purposely throwing a console error for referencing a local variable outside of the function
function missingLocalFunc() {
    console.log(X + Y);
}

localFunc();
missingLocalFunc();

// checks if current time is before 18:00
function checkTime() {
    if (new Date().getHours() < 18)
    {
        document.getElementById("Hours").innerHTML = "It is before 6:00 PM, the store is open.";
    }
    else 
    {
        document.getElementById("Hours").innerHTML = "It is after 6:00 PM, the store is closed.";
    }
}

// determines if X is equal to 100
function checkX() {
    if (X == 100)
    {
        document.getElementById("CheckX").innerHTML = "X is equal to 100.";
    }
    else
    {        
        document.getElementById("CheckX").innerHTML = "X is not equal to 100.";
    }
}

// checks age to determine if the user is 18 or older
function checkAge(){
    if (document.getElementById("AgeInput").value < 18) 
    {
        document.getElementById("AgeResult").innerHTML = "You are not yet a legal adult.";
    }
    else
    {
        document.getElementById("AgeResult").innerHTML = "You are a legal adult.";
    }
}

// checks current time and displays if it is morning, afternoon, or evening
function Time_function() {
    var Time = new Date().getHours;
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else 
    {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}