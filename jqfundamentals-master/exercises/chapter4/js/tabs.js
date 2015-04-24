function TabbedNavigation () {
}

TabbedNavigation.prototype.hideModules = function() {
  var $modules = $('div.module').hide();
  var $that = this;
  var $nav = $('<ul/>')
    .addClass('tabs')
    .insertBefore($modules.first());
  return { $modules : $modules,
           $nav : $nav,
           $that : $that,
  }
  // this.createTabs($nav, $(this), $modules)
}

TabbedNavigation.prototype.createTabs = function($nav, $module, $modules) {
  hideModules = this.hideModules();
  hideModules.$modules.each(function() { 
    // var $module = $(this)
    console.log(hideModules.$that);
    var $title = hideModules.$that.filter('h2');
    var $tab = $('<li>' + $title.text() + '</li>')
      .appendTo(hideModules.$nav);
    $tab.click(function() {
      hideModules.$module.show().siblings('.module').hide();
      hideModules.$module.addClass('current');
    });
    hideModules.$modules.first().show();
  });
};

TabbedNavigation.prototype.init = function() {
  this.hideModules();
  this.createTabs();
}

$(document).ready(function() {
  var tabnav = new TabbedNavigation();
  tabnav.init();
});
