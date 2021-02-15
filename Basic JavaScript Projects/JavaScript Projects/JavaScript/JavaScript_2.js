function validateForm() {
    var x = document.forms["BasicForm"]["nameField"].value;
    var y = document.forms["BasicForm"]["emailAddressField"].value;
    if (x == "" || y == "") {
        alert("All fields must be filled out before submitting.");
        return false;
    }
}