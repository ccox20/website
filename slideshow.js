var slideIndex;
var n;
var myTimer;

slideIndex = 1;

showSlides();

// Next/previous controls
//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

//STATIC/ON-CLICK SLIDESHOW
function showSlides(n) {
    var i;
    var slides;
    var dots;
    var myTimerValue=10000;
    
    clearTimeout(myTimer);
    
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
    
    myTimer = setTimeout(showSlides2, myTimerValue);
}

//ANIMATING SLIDESHOW IMAGES
function showSlides2() {
    var i;
    var slides;
    var dots;
    var myTimerValue=10000;
    
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
    myTimer = setTimeout(showSlides2, myTimerValue);
}
