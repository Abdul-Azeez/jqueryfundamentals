function LoadWebpage() {
};

LoadWebpage.prototype.loadBlog = function() {
  var $headers = $('#blog h3');
  $headers.each(function() {
    var $this = $(this);
    var $newDiv = $('<div id=\'a\'></div>').insertAfter($this);
    $this.data('newDiv', $newDiv);
  })
  .click(function(e) {
    e.preventDefault();

    var $this = $(this);
    var link = $this.find('a').attr('href');
    var tempArray = link.split('#');
    var divId = '#' + tempArray[1];
    var $newDiv = $this.data('newDiv');

    $newDiv.load("blog.html", function(response, status, xhr) {
      alert(response);
    if (status == "error") {
        var msg = "Sorry but there was an error: ";
        alert(msg + xhr.status + " " + xhr.statusText);
      }
    });
        
  });
};

  $(document).ready(function() {
    var loadweb = new LoadWebpage();
    loadweb.loadBlog;
  });