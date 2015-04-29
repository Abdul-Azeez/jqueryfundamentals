function Slide() {
  this.activeSlide = 0;
}

Slide.prototype.imageSlider = function (element) {
  // var slider2 = $('#slideshow li:gt(0)').hide();
  var slider = $('#slideshow li').hide();
  var firstslide = slider.first();
  var count = slider.length;
  var that = this;
  // $("#slideShow").prependTo($("body"));
  this.activeSlide++
  slider.insertBefore($("body"));
  // slider.eq(this.activeSlide).show();
    this.activeSlide++
    slider.eq(this.activeSlide).fadeIn(4000, function() {
      slider.eq(this.activeSlide).fadeOut(2000, function() {
      if (that.activeSlide == count) {
          that.activeSlide = 0;
          slider.eq(that.activeSlide)
      } 
    })
  })
};

Slide.prototype.navigation = function() {
  $("<div/>", {"class": "navigation"}).appendTo($("#slideshow li"))
  
}
$(document).ready(function () {
  slideshow = new Slide();
  slideshow.imageSlider()

})

