'use strict';
console.log('reading js');

document.querySelector('#s').addEventListener('click', processForm);
var el = document.querySelector('#back');
if(el){
   el.addEventListener('click', resetForm);
}
function processForm (evt){
  var proNoun = document.querySelector("#proNoun").value;
  var adj1 = document.querySelector("#adj1").value;
  var verb1 = document.querySelector("#verb1").value;
  var adj2 = document.querySelector("#adj1").value;
  var verb2 = document.querySelector("#verb1").value;
  var adv1 = document.querySelector("#adv1").value;
  var x = document.getElementById("myImg").src;
  // caputre myMsg
  var madLib = document.querySelector("#madLib"); //message
  var madLibMessage = document.querySelector("#madLibsMessage");
  var msg = document.querySelector("#msg");//section
  var article = document.querySelector("article");
  var section = document.querySelector("section");
    
  article.style.display = "none";
  section.style.display = "block";
  msg.style.display = "block";
  madLibMessage.innerHTML = 'Jamie absolutely love to type, it is ' +proNoun + ' favorite thing to do. The first step to a good typing method is to have a very ' + adj1 + ' keyboard.  It is always good to ' + verb1 + ' with the keyboard to get better at using it.  Then, you must make sure your computer is very ' + adj2 + ' so that you can ' + verb2 + ' it properly. With these steps, you too can type ' + adv1 + '!'; 
  
  evt.preventDefault();
}

function back(){
  location.reload(true);
}
