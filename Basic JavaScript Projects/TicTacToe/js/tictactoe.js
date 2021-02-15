// keeps track of whose turn it is.
let activePlayer = 'X';
// stores an array of moves. Used to determine win condition.
let selectedSquares = [];

// function to place X or O into a square
function placeXOrO(squareNumber) {
    // this condition will ensure the square has not already been selected
    // .some() method is used to check for an instance of the same square
    if (!selectedSquares.some(element => element.includes(squareNumber))) 
    {
        // retrieves the html element id that was clicked and stores it in select variable
        let select = document.getElementById(squareNumber);
        // checks which player's turn it is
        if (activePlayer === 'X') 
        {
            // places x.png in the HTML square if X is the current actives player
            select.style.backgroundImage = 'url("images/x.png")';
        }
        else 
        {
            // places o.png in the HTML square if it isn't X's turn (only X or O would have turns)            
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // calls a function to check for the win condition
        checkWinConditions();
        // condition for changing the active player
        // swaps to O if X is currently activePlayer, otherwise ensures X is activePlayer (end of O's turn)
        if (activePlayer === 'X') 
        {
            activePlayer = 'O';
        }
        else
        {
            activePlayer = 'X';
        }

        // function to play placement sound. 
        // Sound from ZapSplat.com
        audio('./media/place.mp3');
        // condition to check if it is the computer's turn
        if(activePlayer === 'O') {
            // function to disable player clicking during computer's turn
            disableClick();
            // function waits 1 second before placing the image and enabling player click
            setTimeout(function () { computersTurn();}, 1000);
        }
        // returns true for computersTurn() function to work
        return true;
    }

    // function for computer player to select a random square
    function computersTurn() {
        // boolean needed for while loop
        let success = false;
        // stares a random number between 0-8 for square selection
        let pickASquare;
        // condition allowing the while loop to keep trying if a square has already been selected
        while(!success){
            // results in a random number between 0-8
            pickASquare = String(Math.floor(Math.random() * 9));
            // condition to determine if the random number has been selected yet, returns true if it hasn't
            if (placeXOrO(pickASquare)) {
                // calls the function to place the image into the square
                placeXOrO(pickASquare);
                // ends loops when a square has been picked
                success = true;
            };
        }
    }
}

// this function parses the selectedSquares array to search for win conditions
// drawWinLine function is called to draw a win line if the condition is met
function checkWinConditions() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100);}
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90);}
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
    // O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
    // O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558);}
    // O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558);}
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
    // O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}
    // condition check for a tie. If none of the above conditions are met and 9 squares are selected, the code executes
    else if (selectedSquares.length >= 9) {
        // plays tie sound
        // Sound from ZapSplat.com
        audio('./media/tie.mp3');
        // this function sets a .3 second timer before the resetGame function is called
        setTimeout(function() {resetGame();}, 1000);
    }
}

// This function checks if an array includes 3 strings, checks for each win condition
function arrayIncludes(squareA, squareB, squareC) {
    // variables used to check for 3 in a row
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // if the 3 variables we pass are all included in our array, true is returned 
    // the else if condition executes the drawWinLine function
    if (a === true && b === true && c === true) {console.log(squareA + " " + squareB + " " + squareC); return true;}
}

// This function makes the body element unclickable on the Computer's turn
function disableClick() {
    // sets body unclickable
    body.style.pointerEvents ='none';
    // sets the body clickable again after 1 second (computer's turn length)
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// This functions takes the string for the audio file path and plays it
function audio(audioURL) {
    // creates a new audio object to pass the path
    let audio = new Audio(audioURL);
    // plays the audio
    audio.play();
}

// This function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // this line accesses our html canvas element
    const canvas = document.getElementById('win-lines');
    // this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    // this line indicates where the start of a lines x axis is
    let x1 = coordX1,
        // this line indicates where the start of a lines y axis is
        y1 = coordY1,
        // this line indicates where the end of a lines x axis is
        x2 = coordX2,
        // this line indicates where the end of a lines y axis is
        y2 = coordY2,
        // this variable stores temporary x axis data we update in our animation loop.
        x = x1,
        // this variable stores temporary y axis data we update in our animation loop.
        y = y1;

    // this function interacts with the canvas
    function animateLineDrawing() {
        // this variable creates the loop for when the game ends and restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // this method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        // this method starts a new path
        c.beginPath();
        // this method moves us to a starting point for our line
        c.moveTo(x1, y1);
        // this method indicates the end point in our line
        c.lineTo(x, y);
        // this method set the width of our line
        c.lineWidth = 10;
        // this method sets the color of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        // this method draws everything we laid out above
        c.stroke();
        // this condition checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            // this condition adds 10 to the previous end x point
            if (x < x2) { x += 10 ;}
            // this condition adds 10 to the previous end y point
            if (y < y2) { y += 10 ;}
            // this condition cancels our animation loop if the end poinnts are reached
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // this condition is similar to the one above
        // it was necesssary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if(x < x2) { x += 10; }
            if(y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // this function clears our canvas after our win line is drawn
    function clear() {
        // this line starts the animation loop
        const animationLoop = requestAnimationFrame(clear);
        // this line clears our canvas
        c.clearRect(0, 0, 608, 608);
        // this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    // this line disallows clicking while the win sound is playing
    disableClick();
    // this line plays the win sounds
    // Sound from ZapSplat.com
    audio('./media/winGame.mp3');
    // this line calls our main animation loop
    animateLineDrawing();
    // this line waits 1 second
    // then, clears canvas, resets game, and allows clicking
    setTimeout(function() { clear(); resetGame(); }, 1000);
}

// this function resets the game in a tie or a win
function resetGame() {
    // this for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        // this variable gets the html element of i
        let square = document.getElementById(String(i));
        // this removes our elements backgroundImage
        square.style.backgroundImage = '';
    }
    // this resets our array so it is empty and we can start over
    selectedSquares = [];
}