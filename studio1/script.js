"use strict";

/*capture the submit event with an event listener for onclick and a callback function of processForm
*/
document.querySelector("#submit").addEventListener('click', processForm);
document.querySelector("#reset").addEventListener('click', resetForm);

//define process function
function processForm(evt) {
  // capture html form inputs
  var proNoun = document.querySelector("#proNoun").value;
  var adj1 = document.querySelector("#adj1").value;
  var verb1 = document.querySelector("#verb1").value;
  var adj2 = document.querySelector("#adj1").value;
  var verb2 = document.querySelector("#verb1").value;
  var adv1 = document.querySelector("#adv1").value;

  // caputre myMsg
  var myMsg = document.querySelector("#myMsg");
  var msgSection = document.querySelector("#msgSection");


  myMsg.innerHTML =
    "Hi, " +
    userName +
    "!<p>You love the color <em>" +
    favColor +
    "</em>!  Have a great day!</p>";

  msgSection.className = "grow";

  // prevent page from reloading
  evt.preventDefault();
}

function submitForm() {
  msgSection.className = "grow";
}
function returnForm() {
  msgSection.className = "shrink";
}