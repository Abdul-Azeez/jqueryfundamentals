function TabbedNavigation () {
}

TabbedNavigation.prototype.hideModules = function() {
  var $modules = $('div.module').hide();
  var that = this;
  var $nav = $('<ul/>')
    .addClass('tabs')
    .insertBefore($modules.eq(0));
  $modules.each(function() { 
    var $module = $(this)
    that.createTabs($nav, $module, $modules)
  })
}
TabbedNavigation.prototype.createTabs = function($nav, $module, $modules) {
  var $title = $module.find('h2');
  var $tab = $('<li>' + $title.text() + '</li>')
    .appendTo($nav);
  $tab.click(function() {
    $module.show().siblings('.module').hide();
    $module.addClass('current');
  });
  $modules.eq(0).show();
};

$(document).ready(function() {
  var tabnav = new TabbedNavigation();
  tabnav.hideModules();
});
});
