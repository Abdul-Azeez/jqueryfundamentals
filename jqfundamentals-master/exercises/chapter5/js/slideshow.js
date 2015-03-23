function SlideShow () {  
};

SlideShow.prototype.slide = function () {
  var image = $("#slideshow img");
  $('body').prepend(image);
  var numSlides = image.length;
  var activeSlide = 0;
  var speed = 1000;
  var fade = 0;
  var timer = setInterval(rotate, speed);
  image.eq(activeSlide).show();

  $("#slideshow img").hover(function() {
    clearInterval(timer);
  }, function() {
    timer = setInterval(rotate, speed);
  }); 

  function rotate() {
    activeSlide++;
    if (activeSlide == numSlides) {
      activeSlide = 0;
    }
    image.not(activeSlide).fadeOut(fade);
    image.eq(activeSlide).fadeIn(fade);
  }
};

$(document).ready(function (){
  var slideshow = new SlideShow();
  slideshow.slide();
});