function myDictionary(){
    // defining the Guitar dictionary KVPs
    var Guitar = {
        Type: "Electric",
        Strings: 6,
        F_Holes: "None",
        Model: "Larada",
        Stock: 9
    };
    // creates a string to display the stock of Guitars
    var docString = Guitar.Stock + "x - " + Guitar.Strings + " String " + Guitar.Model + " " + Guitar.Type + " Guitar"; 
    // deletes the value paired with the Stock Key
    delete Guitar.Stock;
    // displays the Stock KVP to the Dictionary id
    document.getElementById("Dictionary").innerHTML = Guitar.Stock;
}