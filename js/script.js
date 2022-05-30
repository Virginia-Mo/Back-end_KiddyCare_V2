
  
let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function() {
  body.classList.toggle("openMenu");
});

let blogMenuContainer = document.querySelector(".pageMenuContainer");
let doubleLink = document.querySelectorAll(".doubleLInk");

blogMenuContainer.addEventListener("click", function(){
  body.classList.toggle("active");
});


let rev = 0;
    
        const prev = document.getElementById("previous")
        const next = document.getElementById("after")
        let reviews = document.getElementsByClassName("parents");
        let bodyT = document.querySelector("body")
        
        prev.addEventListener("click", previousReview)
        function previousReview() {
            rev = rev - 1;
            bodyT.classList.add("activeTest")
            carousel(rev);
        }
        next.addEventListener("click", nextReview)
        function nextReview() {
            rev = rev + 1;
            bodyT.classList.add("activeTest")
            carousel(rev);
        }
  
        function carousel(review) {
            let reviews = document
                .getElementsByClassName("parents");
  
            if (review >= reviews.length) {
                review = 0;
                rev = 0;
            }
            if (review < 0) {
                review = reviews.length - 1;
                rev = reviews.length - 1;
            }
            for (let i = 0; i < reviews.length; i++) {
                reviews[i].style.display = "none";
            }
            reviews[review].style.display = "block";
        }    carousel(rev);