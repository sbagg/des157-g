'use strict';
console.log('reading js');

// get all articles as an array
var pages = document.querySelectorAll(".page");

// get each link
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");
var p5 = document.querySelector("#p5");

// show the first article
pages[0].style.display = "block";

// add event listeners to links
p1.addEventListener('click', function(){
  hidePages();
  pages[0].style.display = "block";
})

p2.addEventListener('click', function(){
  hidePages();
  pages[1].style.display = "block";
})

p3.addEventListener('click', function(){
  hidePages();
  pages[2].style.display = "block";
})

p4.addEventListener('click', function(){
  hidePages();
  pages[3].style.display = "block";
})

p5.addEventListener('click', function(){
  hidePages();
  pages[4].style.display = "block";
})

// function to hide all articles
function hidePages() {
  for (var i = 0; i < pages.length; i++) {
    console.log('hide pages');
    pages[i].style.display = "none";
  }
}