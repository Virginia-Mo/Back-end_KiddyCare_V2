 // Gallery Photos 
 function handleGalleryPhotos(){
    btnAll = document.querySelector("#all");
    btnPlaying = document.querySelector("#playingbtn");
    btnDrawing = document.querySelector("#drawingbtn");
    btnReading = document.querySelector("#readingbtn");
  
    btnAll.addEventListener("click", () => {
      show("allphotos");
      hide("galleryphotos");hide("playing"); hide("drawing"); hide("reading");
    }); 
    
    btnPlaying.addEventListener("click", () => {
      show("playing");
      hide("galleryphotos");hide("allphotos"); hide("drawing"); hide("reading");

    });
    
    btnDrawing.addEventListener("click", () => {
      show("drawing");
      hide("galleryphotos");hide("allphotos"); hide("playing"); hide("reading");

    });
    
    btnReading.addEventListener("click", () => {
      show("reading");
      hide("galleryphotos");hide("allphotos"); hide("playing"); hide("drawing");

    });
               
  
    function show(object) {
      if (document.getElementById)
        document.getElementById(object).style.display = "block";
    };
    function hide(object) {
      if (document.getElementById)
        document.getElementById(object).style.display = "none";
    }
    return;
  };
handleGalleryPhotos();