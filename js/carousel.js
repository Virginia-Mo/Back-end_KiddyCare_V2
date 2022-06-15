// Testimonial carousel
  
function carouselFunction (){
  position = 0;
    
  prev = document.getElementById("previous");
  next = document.getElementById("after");
  bodyT = document.querySelector("body");
        
  prev.addEventListener("click", () => {            
    position = position - 1;
    bodyT.classList.add("activeTest");
    carousel(position);
  });

  next.addEventListener("click",  () => {
    position = position + 1;
    bodyT.classList.add("activeTest");
    carousel(position);
  });
  
  function carousel(review) {
    reviews = document.getElementsByClassName("parents");
  
    if (review >= reviews.length) {
      review = 0;
      position = 0;
    }
    if (review < 0) {
      review = reviews.length - 1;
      position = reviews.length - 1;
    }
    for ( let i = 0; i < reviews.length; i++) {
      reviews[i].style.display = "none";
    }
    reviews[review].style.display = "block";
  }    
  carousel(position);
  return;
};
carouselFunction();

// EFFETS SCROLL

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold : 0,
  rootMargin : "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver( (entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.toggle("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, 
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
