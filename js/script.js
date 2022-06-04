    
function menuJS(){
    let toggle = document.querySelector(".toggle");
    let body = document.querySelector("body");

    toggle.addEventListener("click", e => {
    body.classList.toggle("openMenu");
});

    let blogMenuContainer = document.querySelector(".pageMenuContainer");
    let doubleLink = document.querySelectorAll(".doubleLInk");

    blogMenuContainer.addEventListener("click", function(){
    body.classList.toggle("active");
});
};
menuJS();


function carouselFunction(){
    position = 0;
    
       const prev = document.getElementById("previous")
       const next = document.getElementById("after")
       const reviews = document.getElementsByClassName("parents");
       const bodyT = document.querySelector("body")
        
prev.addEventListener("click", e => {            
            position = position - 1;
            bodyT.classList.add("activeTest")
            carousel(position);
        })

next.addEventListener("click",  e => {
            position = position + 1;
            bodyT.classList.add("activeTest")
            carousel(position);
        })
  
function carousel(review) {
        const reviews = document.getElementsByClassName("parents");
  
            if (review >= reviews.length) {
                review = 0;
                position = 0;
            }
            if (review < 0) {
                review = reviews.length - 1;
                position = reviews.length - 1;
            }
            for (let i = 0; i < reviews.length; i++) {
                reviews[i].style.display = "none";
            }
            reviews[review].style.display = "block";
        }    
        carousel(position);
}
// carouselFunction();



//  Quand je clique sur une div; certaines photos apparaissent


// let divGallery = document.getElementById("allphotos")
const btnAll = document.getElementById("all");
const btnPlaying = document.getElementById("playingbtn");
const btnDrawing = document.getElementById("drawingbtn");
const btnReading = document.getElementById("readingbtn");

btnAll.addEventListener("click", e => {
    show("allphotos");
    hide("playing"); hide("drawing"); hide("reading");
}) 

btnPlaying.addEventListener("click", e => {
  show("playing");
  hide("allphotos"); hide("drawing"); hide("reading")
      return
    })

btnDrawing.addEventListener("click", e => {
  show("drawing");
  hide("allphotos"); hide("playing"); hide("reading")
      return
     })

btnReading.addEventListener("click", e => {
        show("reading");
        hide("allphotos"); hide("playing"); hide("drawing")
                return
              })
             


function show(object) {
    if (document.getElementById)
    document.getElementById(object).style.display = "block";
    }
function hide(object) {
    if (document.getElementById)
    document.getElementById(object).style.display = "none";
    }


function createImg(number){
    let img = document.createElement("img");
   img.src=`../img/portfolio-${number}.jpg`;
   return img
}

let img1 = createImg(1)
let img2 = createImg(2)
