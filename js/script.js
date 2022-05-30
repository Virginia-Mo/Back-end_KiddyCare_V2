
  
let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function() {
  body.classList.toggle("openMenu");
});

// let blogMenuContainer = document.querySelector(".pageMenuContainer");
// let doubleLink = document.querySelectorAll(".doubleLInk");

// blogMenuContainer.addEventListener("click", function(){
//   menu.classList.toggle("active");
// });