// simple function to utilize a while loop to increment X until condition is met
function Call_Loop() {
    var X = 0;
    while(X < 5){
        X++;
    }
    document.getElementById("Loop").innerHTML = "The Loop had to be called " + X + " times!";
}


// array of musical instruments, for use in the for_Loop() function
var instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];

// for loop iterates through the instrument array and outputs the instruments as Strings on separate lines
function for_Loop() {
    var outputString = "";
    for (var i = 0; i < instruments.length; i++) {
        outputString += instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = outputString;
}

// creates and adds to an array of fruit, then displays on page
function array_Function() {
    var fruitArray = [];
    fruitArray[0] = "Apple";
    fruitArray[1] = "Banana";
    fruitArray[2] = "Cherry";
    fruitArray[3] = "Date";
    document.getElementById("Array").innerHTML = "The shop will serve different fruit flavors such as " + fruitArray[2] + " and " + fruitArray[0] + "."; 
}

// creates and edits a const object's properties, displays on page
function constant_function() {
    const Musical_Instrument = {type:"keyboard", brand:"Casio", color:"black"};
    Musical_Instrument.type = "guitar";
    Musical_Instrument.brand = "Schecter";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The " + Musical_Instrument.color + " " + Musical_Instrument.brand + " " + Musical_Instrument.type + " will cost " + Musical_Instrument.price + ".";
}


// demonstration of the let keyword, displays BeepBoopBeep
var letString = "Beep";

document.getElementById("Let").innerHTML += letString;
{ 
    let letString = "Boop"
    document.getElementById("Let").innerHTML += letString;
}
document.getElementById("Let").innerHTML += letString;

// demonstration of the let keyword in use with an object.
// object properties include a method to display the properties in a string
let guitar = {
    brand: "Ibanez",
    color: "black",
    strings: "6",
    pickupBrand: "Humbucker",
    description: function() {
        return "The " + guitar.strings + " string " + guitar.color + " " + guitar.brand + " with " + guitar.pickupBrand + " pickups.";
    }
}
document.getElementById("LetObject").innerHTML = guitar.description();