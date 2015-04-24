function TabbedNavigation () {
}

TabbedNavigation.prototype.hideModules = function() {
  var $modules = $('div.module').hide();
  var $that = this;
  var $nav = $('<ul/>')
    .addClass('tabs')
    .insertBefore($modules.first());
<<<<<<< HEAD
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
=======
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
>>>>>>> 9d39a743d2e51170156b3bef1881433fb16e984b
  });
};

TabbedNavigation.prototype.init = function() {
  this.hideModules();
  this.createTabs();
}

$(document).ready(function() {
  var tabnav = new TabbedNavigation();
<<<<<<< HEAD
  tabnav.init();
});
=======
  tabnav.hideModules();
});

>>>>>>> 9d39a743d2e51170156b3bef1881433fb16e984b
