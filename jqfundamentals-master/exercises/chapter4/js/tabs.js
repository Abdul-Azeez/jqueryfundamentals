function TabbedNavigation () {
}

TabbedNavigation.prototype.hideModules = function() {
  var $modules = $('div.module').hide();
  var that = this;
  var $nav = $('<ul/>')
    .addClass('tabs')
    .insertBefore($modules.first());
  this.createTabs($nav, $(this), $modules)
}

TabbedNavigation.prototype.createTabs = function($nav, $module, $modules) {
  $modules.each(function() { 
    var $module = $(this)
    var $title = $module.find('h2');
    var $tab = $('<li>' + $title.text() + '</li>')
      .appendTo($nav);
    $tab.click(function() {
      $module.show().siblings('.module').hide();
      $module.addClass('current');
    });
    $modules.first().show();
  });
};

$(document).ready(function() {
  var tabnav = new TabbedNavigation();
  tabnav.hideModules();
});

