function TabbedNavigation() {

};

TabbedNavigation.prototype.addTabNav= function () {
  var $modules = $('div.module')
  console.log($modules);
  var $firstmodule =$("div.module").first();
  var $unordered = $firstmodule.before("<ul></ul>");
  $modules.each(function () {
    var $module = $(this);
    var $textValue = $module.find('h2:first').text();
    var $tabvalue = $('<li>' + $textValue +'<li>').appendTo($unordered);
    $tabvalue.bind('click', function() {
      $tabvalue.addClass('current').siblings('').removeClass('current');
      $module.show().siblings('.module').hide()
    });
    $unordered.find('li:first').addClass('current');
    $modules.eq(0).show();
  });
 };

$(document).ready(function() {
  var tabnav = new TabbedNavigation();
  tabnav.addTabNav();
});   
