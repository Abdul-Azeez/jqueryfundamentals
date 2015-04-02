function RevealText() {
};

RevealText.prototype.show = function () {
  $('#blog h3 ').click(function(event){
    // console.log("gbenga");
	event.preventDefault();
	var post = $(this);
	post.siblings('p.excerpt').slideToggle();	
	post.parent().siblings().find('p.excerpt').slideUp();
  });
};

$(document).ready(function() {
  var showText = new RevealText;
  showText.show();
})
