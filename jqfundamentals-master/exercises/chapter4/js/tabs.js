function TabbedNavigation () {
}

TabbedNavigation.prototype.hideModules = function() {
  var $modules = $('div.module').hide();
  var $that = $(this);
  var $nav = $('<ul/>')
    .addClass('tabs')
    .insertBefore($modules.first());
  return { $modules : $modules,
           $nav : $nav,
  }
}

TabbedNavigation.prototype.createTabs = function($nav, $module, $modules) {
  hideModules = this.hideModules();
  hideModules.$modules.each(function() { 
    var $module = $(this)
    var $title = ($module).find('h2');
    var $tab = $('<li>' + $title.text() + '</li>')
      .appendTo(hideModules.$nav);
    $tab.click(function() {
      $module.show().siblings('.module').hide();
      $module.addClass('current');
    });
  hideModules.$modules.first().show();
 });
}


TabbedNavigation.prototype.init = function() {
  this.createTabs();
}

$(document).ready(function() {
  var tabnav = new TabbedNavigation();
  tabnav.init();
});





