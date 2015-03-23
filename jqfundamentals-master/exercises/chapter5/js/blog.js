function SlideBlog() {
};

SlideBlog.prototype.slideblog = function () {
  $('#blog h3 ').click(function(event){
    console.log("gbenga");
	event.preventDefault();
	var post = $(this);
	post.siblings().slideToggle();	
	post.parent().siblings().find('p.excerpt').slideUp();
  });
};

$(document).ready(function() {
  var blog = new SlideBlog;
  blog.slideblog();
})
