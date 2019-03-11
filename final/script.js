
console.log('reading js');

// get all articles as an array
var pages = document.querySelectorAll(".page");

// get each link

var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");
var p5 = document.querySelector("#p5");
var explore = document.querySelector("#text");
var section = document.querySelectorAll("section");
var header = document.querySelector("#header");
var nav = document.querySelector("nav");
var footer = document.querySelector("footer");
// show the first article
pages[0].style.display = "none";

// add event listeners to links
p1.addEventListener('click', function(){
  hidePages();
  pages[0].style.display = "none";
  header.style.display = "block";
  explore.style.display = "block";
  nav.style.backgroundColor = "green";
  footer.style.backgroundColor = "green";
})

p2.addEventListener('click', function(){
  hidePages();
  pages[1].style.display = "block";
  pages[1].style.backgroundColor = "#B658A2";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "#B658A2";
  footer.style.backgroundColor = "#B658A2";
})

p3.addEventListener('click', function(){
  hidePages();
  pages[2].style.display = "block";
  pages[2].style.backgroundColor = "#F4A42E";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "#F4A42E";
  footer.style.backgroundColor = "#F4A42E";


})

p4.addEventListener('click', function(){
  hidePages();
  pages[3].style.display = "block";
  pages[3].style.backgroundColor = "#60C8D3";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "#60C8D3";
  footer.style.backgroundColor = "#60C8D3";

})

p5.addEventListener('click', function(){
  hidePages();
  pages[4].style.display = "block";
  pages[4].style.backgroundColor = "green";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "green";
  footer.style.backgroundColor = "green";

})

explore.addEventListener('click', function(){
  hidePages();
  pages[5].style.display = "block";
  pages[5].style.opacity = "white";
  header.style.display = "none";
  nav.style.backgroundColor = "green";
  footer.style.backgroundColor = "green";
  section[0].style.backgroundColor = "#B658A2";
  section[1].style.backgroundColor = "#F4A42E";
  section[2].style.backgroundColor = "#60C8D3";
  section[3].style.backgroundColor = "green";
  
})
section[0].addEventListener('click', function(){
  hidePages();
  pages[1].style.display = "block";
  pages[1].style.backgroundColor = "#B658A2";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "#B658A2";
  footer.style.backgroundColor = "#B658A2";
    
})
section[1].addEventListener('click', function(){
  hidePages();
  pages[2].style.display = "block";
  pages[2].style.backgroundColor = "#F4A42E";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "#F4A42E";
  footer.style.backgroundColor = "#F4A42E";
    
})
section[2].addEventListener('click', function(){
  hidePages();
  pages[3].style.display = "block";
  pages[3].style.backgroundColor = "#60C8D3";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "#60C8D3";
  footer.style.backgroundColor = "#60C8D3";

})
section[3].addEventListener('click', function(){
  hidePages();
  pages[4].style.display = "block";
  pages[4].style.backgroundColor = "green";
  header.style.display = "none";
  explore.style.display = "none";
  nav.style.backgroundColor = "green";
  footer.style.backgroundColor = "green";

    
})
//section[4].addEventListener('click', function(){
//  hidePages();
//  pages[5].style.display = "block";
//  pages[5].style.backgroundColor = "green";
//  header.style.display = "none";
//  explore.style.display = "none";
//  nav.style.backgroundColor = "green";
//  footer.style.backgroundColor = "green";
//    
//})

// function to hide all articles
function hidePages() {
  for (var i = 0; i < pages.length; i++) {
    console.log('hide pages');
    pages[i].style.display = "none";
    explore.style.display = "none";
    header.style.display = "none";

  }
}