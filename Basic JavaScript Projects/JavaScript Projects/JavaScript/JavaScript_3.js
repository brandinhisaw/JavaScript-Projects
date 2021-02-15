function displayType(preference) {
    var myPref = preference.getAttribute("data-my-preference");
    alert(myPref + " is the clear winner between " + preference.innerHTML);
}