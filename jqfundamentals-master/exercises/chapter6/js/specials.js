function LoadContent() {
};

LoadContent.prototype.loadjson = function() {
  // var $newDiv = $('<div></div>').appendTo('#specials');
  that = this;
 var $day = $('#specials select[name="day"]');
 console.log($day);
  $day.bind('change', function(){
    $.ajax({
      url: "data/specials.json",
      type: "GET",
      dataType: "json",
      cache: false,
      success: function(json){
        day = ($day.val());
        content = json[day];
        alert(content);
        that.Display(content);
      }
    });
  });

  $('div#specials input[type = "submit"]').parent().remove();

};

LoadContent.prototype.Display = function(content) {
  var $newDiv = $('<div></div>').appendTo('#specials');
  var $title = $('<h2 />');
  var $text = $('<p />');
  var $image = $('<img />');
  $title
    .css('color', content.color)
    .html(content.title);

  $text.html(content.text);
  $image.attr('src', content.image);
  $newDiv.append($title, $text, $image);
};


$(document).ready(function() {
  var loadcontent = new LoadContent();
  loadcontent.loadjson();
});

