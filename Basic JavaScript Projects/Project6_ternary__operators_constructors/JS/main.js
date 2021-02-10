// determines rider eligibility based on height input, displays too short/tall enough message
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// constructor for Vehicle class
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// utilizes constructor to store information in variables
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// functions to display stored vehicle information
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function newFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Jack drives a " + Jack.Vehicle_Color + " " + Jack.Vehicle_Year + " " + Jack.Vehicle_Make + " " + Jack.Vehicle_Model;
}

// nested function example
function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = randomNumber();
    function randomNumber() {
        return Math.random() * 100;
    }
}