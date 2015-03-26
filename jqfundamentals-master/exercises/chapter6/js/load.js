function LoadWebpage() {
};

LoadWebpage.prototype.loadBlog = function() {
  var $headers = $('#blog h3');
  _that = this;
  $headers.each(function() {
    var $this = $(this);
  })
  .click(function(e) {
    e.preventDefault();

    var $this = $(this);
    var link = $this.find('a').attr('href');
    var tempArray = link.split('#');
    var divId = '#' + tempArray[1];
    var $newDiv = $('<div id=\'a\'></div>').insertAfter($this);
    $this.data('newDiv', $newDiv);
    $newDiv.load("data/blog.html " + divId, function(response, status, xhr) {
    if (status == "success") {
      $currentelement= $newDiv
      $currentelement.slideDown( "slow" );
    } 
    if (status == "error") {
        var msg = "Sorry but there was an error: ";
        alert(msg + xhr.status + " " + xhr.statusText);
      }
    });
        
  });
};

  $(document).ready(function() {
    var loadweb = new LoadWebpage();
    loadweb.loadBlog();
  });
