function LoadWebpage() {};

LoadWebpage.prototype.loadBlog = function() {
  var $blog = $('#blog');
  var that = this
  var headers = $blog.find('h3')
  headers.each(function() {
    var $this = $(this);
    var $target = $('<div/>').insertAfter($this);
    $this.data('target', $target);
  })
  headers.click(function(e)) {
    e.preventDefault();
    var $this = $(this);
    var link = $this.find('a').attr('href');
    var tempArray = link.split('#');
    var divId = '#' + tempArray[1];
    var $target = $this.data('target');
    $target.load("data/blog.html " + divId, function(response, status, xhr) {
      if (status == "success") {
        that.hideOther($(this))
      }
      if (status == "error") {
        var msg = "Sorry but there was an error: ";
        alert(msg + xhr.status + " " + xhr.statusText);
      }
    });
  });
};

LoadWebpage.prototype.hideOther = function(clickedButton) {
  clickedButton.closest('li').siblings('li').each(function(index) {
    $(this).find('div').empty();
  });
};
$(document).ready(function() {
  var loadweb = new LoadWebpage();
  loadweb.loadBlog();
});
