// demonstrates the switch function utilizing input gathered on the page
function Instrument_Function() {
    var instrumentOutput;
    var instrument = document.getElementById("Instrument_Input").value;    
    var instrumentString = " instruments are wonderful.";
    switch(instrument) {
        case "String":
            instrumentOutput = "String" + instrumentString;
        break;
        case "Key":
            instrumentOutput = "Key" + instrumentString;
        break;
        case "Woodwind":
            instrumentOutput = "Woodwind" + instrumentString;
        break;
        case "Percussion":
            instrumentOutput = "Percussion" + instrumentString;
        break;
        default:
            instrumentOutput = "Please enter an instrument exactly as written above.";
    }
    document.getElementById("Favorite_Instrument").innerHTML = instrumentOutput;
}

// demonstrates getEelementsByClassName to create an array, then changes the text of the first element in the array
function clickClassFunction() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// assigns the canvas and canvas context to variables to create canvas effects
var canvas = document.getElementById("DrawingCanvas");
var ctx = canvas.getContext("2d");

// applys a Linear Gradient to the canvas
var grd = ctx.createLinearGradient(0, 0, 800, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 800, 600);

// draws a line from top left to bottom right corners
ctx.moveTo(0,0);
ctx.lineTo(800, 600);
ctx.stroke();