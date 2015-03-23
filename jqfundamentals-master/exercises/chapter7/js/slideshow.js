function SlideShow () {  
  this.image = $("#slideshow img");
  this.numSlides = this.image.length;
  this.activeSlide = 0;
  this.speed = 2000;
  this.timer = setInterval(this.rotate(), this.speed);
  this.fade = 10;
};

SlideShow.prototype.slide = function () {
  // var image = $("#slideshow img");
  $('body').prepend(this.image);
  // var numSlides = image.length;
  // var activeSlide = 0;
  // var speed = 2000;
  // var fade = 0;
  // var timer = setInterval(this.rotate, speed);
   this.timer = setInterval(this.rotate(), this.speed);
  this.hover()
  this.rotate()
  this.image.eq(this.activeSlide).show();

};

SlideShow.prototype.hover = function () {
  console.log(this.speed);
  this.image.hover(function() {
    clearInterval(this.timer);
  }, function() {
    console.log(this.speed)
    timer = setInterval(this.rotate, this.speed);
    
  }); 
};

SlideShow.prototype.rotate = function() {
    this.activeSlide++;
    if (this.activeSlide == this.numSlides) {
      this.activeSlide = 0;
    }
    (this.image).not(this.activeSlide).fadeOut(this.fade);
    this.image.eq(this.activeSlide).fadeIn(this.fade);
    console.log(this.activeSlide);
};

$(document).ready(function (){
  var slideshow = new SlideShow();
  slideshow.slide();
});