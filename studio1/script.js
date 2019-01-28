"use strict";

/*capture the submit event with an event listener for onclick and a callback function of processForm
*/
document.querySelector("#submit").addEventListener('click', processForm);
document.querySelector("#reset").addEventListener('click', resetForm);

//define process function
function processForm() {
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

  // easter egg
  switch (favColor) {
    case "purple":
      msgSection.style.backgroundColor = "purple";
      myMsg.style.color = "antiquewhite";
      break;
    case "orange":
      msgSection.style.backgroundColor = "orange";
      myMsg.style.color = "black";
      break;
    default:
      msgSection.style.backgroundColor = "#333";
      myMsg.style.color = "antiquewhite";
  }

  myMsg.innerHTML =
    "Hi, " +
    userName +
    "!<p>You love the color <em>" +
    favColor +
    "</em>!  Have a great day!</p>";

  msgSection.className = "show";

  // prevent page from reloading
  return false;
}

function resetForm() {
  msgSection.className = "hide";
}