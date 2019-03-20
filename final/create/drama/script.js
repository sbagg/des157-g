'use strict';
console.log('reading js');

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

create.addEventListener('click', function(e){
    //create.style.display = "none";
   
    create.style.width= "85%";
    create.style.left= "7%";
    create.style.top= "15%";
    create.style.height="65%";
    create.style.transition = "all 1.5s";
    back.style.transition = "all 1.5s";
    back.style.left= "40%";
    back.style.marginTop= "2%";
    welcome.style.display = "none";
    notes.style.display = "block";
    add.style.display = "block";
    finish.style.display = "block";
    deleteButton.style.display = "block";
    formData.style.display = "block";
    e.preventDefault();

});