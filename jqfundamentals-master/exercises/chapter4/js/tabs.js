function TabbedNavigation () {
}

TabbedNavigation.prototype.hideModules = function() {
  var $modules = $('div.module').hide();
  that = this
  var $nav = $('<ul/>')
    .addClass('tabs')
    .insertBefore($modules.eq(0));
  $modules.each(function() { 
    var $module = $(this)
    that.putContent($nav, $module)
  })
  $modules.eq(0).show();
  $nav.find('li:first').addClass('current');
}
TabbedNavigation.prototype.putContent = function($nav, $module) {
    var $title = $module.find('h2');
    var $tab = $('<li>' + $title.text() + '</li>')
      .appendTo($nav);
    $tab.click(function() {
      $module.show().siblings('.module').hide();
    });
};

$(document).ready(function() {
  var tabnav = new TabbedNavigation();
  tabnav.hideModules();
});
