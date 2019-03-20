'use strict';
console.log('reading js');
function reload(){
  location.reload(true);
}

var create = document.querySelector("article");
var formData = document.querySelector("form");
var createHover = document.querySelector("article:hover");
var noteBox = document.querySelector("section");
var progress = document.querySelector("#progress");
var back = document.querySelector("#backButton");
var finish = document.querySelector("#finish");
var add = document.querySelector("#add");
var welcome = document.querySelector('h1');
var notes = document.querySelector(".notes");
var deleteButton = document.querySelector("#delete");
  var teaser = document.querySelector("#teaser").value;
  var act1 = document.querySelector("#act1").value;
  var act2 = document.querySelector("#act2").value;
  var act3 = document.querySelector("#act3").value;
  var act4 = document.querySelector("#act4").value;
  var act5 = document.querySelector("#act5").value;
  // caputre myMsg
  var scriptSection = document.querySelector("#scriptSection");//section
  var scriptMsg = document.querySelector("#scriptMsg");

deleteButton.addEventListener('click', reload);
back.addEventListener('click', function(e){
    document.location.href = "../../index.html";
});
create.addEventListener('click', function(e){
    //create.style.display = "none";
   
    create.style.width= "85%";
    formData.style.display = "block";
    create.style.left= "7%";
    create.style.top= "32.25%;";
    create.style.height="45em";
    create.style.transition = "all 1.5s";
    
    back.style.transition = "all 1.5s";
    back.style.left= "42%";
    back.style.marginTop= "7%";
    welcome.style.display = "none";
    add.style.display = "block";
    finish.style.display = "none";
    deleteButton.style.display = "block";
    
    e.preventDefault();

});

add.addEventListener('click', function(e){
    document.location.href = "../../index.html";
});

scriptMsg.innerHTML = teaser + '<br /><br />'
                      'ACT 1<br /><br />' + act1 +
                      'ACT 2<br /><br />' + act2 +
                      'ACT 3<br /><br />' + act3 +
                      'ACT 4<br /><br />' + act4 +
                      'ACT 5<br /><br />' + act5 ; 