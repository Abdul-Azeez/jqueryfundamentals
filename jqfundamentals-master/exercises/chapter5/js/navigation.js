function HoverNav() {
}

HoverNav.prototype.hoverfunction = function() {
  $('#nav li').hover(function() {
    var topList = $(this);
    topList.addClass('hover').siblings().removeClass('hover');
    topList.find('ul').show();
  },
  function() {
    var topList = $(this);
    topList.parent().children().removeClass('hover');
    topList.find('ul').hide();
  });
};

$(document).ready(function() {
  var hovernav = new HoverNav()
  hovernav.hoverfunction();
});
