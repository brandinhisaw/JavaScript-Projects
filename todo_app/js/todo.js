// function that gets the task from input
function get_todos() {
    // array to store tasks
    var todos = new Array;
    // pulls the task that was saved in browser memory
    var todos_str = localStorage.getItem('todo');
    // checks for null value then JSON.parse runs
    // communicates with browser to make the task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// function that adds inputed task innto the get_todos function array
function add() {
    // takes the inputed task and creates a variable of it
    var task= document.getElementById('task').value;

    var todos = get_todos();
    // adds a new tasks to the end of the array
    todos.push(task);
    // converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// function that keeps the tasks displayed on the screen
function show() {
    // sets the task that was retrieved as a variable
    var todos = get_todos();

    // sets up each task as an unordered list
    var html = '<ul>';
    // displays a task to the list in the order originally input
    for (var i = 0; i < todos.length; i++) {
        // also displays the task as a list and creats an "x" button
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    // displays the task as a list
    document.getElementById('todos').innerHTML = html;

    // tells browser how to display todo array once remove() has been called
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }

}
// displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// this keeps the inputs displayed permanently on screen
show();

// function to remove a task from the list
function remove() {
    // gathers the id of the attached task item
    var id = this.getAttribute('id');
    // stores all todos in an array
    var todos = get_todos();
    // removes the id from the array
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // calls show() for how to display the removed item
    show();

    return false;
}