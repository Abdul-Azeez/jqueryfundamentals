function ContactManager() {
};

ContactManager.prototype.validateEmail = function() {
  var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
  var email = $('.email').val();
  var match = regex.test(email);
  if (match == false) {
    return false
  } else {

    return true;
  } 
};
ContactManager.prototype.validateName = function() {
  var name = $('.name').val();
  if(name.trim() == "" ) {
    return false
  } else {
    return true;
    } 
};
ContactManager.prototype.display = function() {
  var num = 0
  var addbutton= $('#add');
  var that = this;
  value = this.validateName()
  addbutton.click(function(num) { 
    if (that.validateName()==true) {
      if (that.validateEmail()==true) {
        var usercontainer = $("<div/>", {"class": "contactinfo"}).appendTo("#usercontact");
        var name = $('.name').val();
        var email = $('.email').val();
        var username = $("<p>", {"class":"name", "value":"that.name","class":name}).text("Name"+ "  "+name).appendTo(usercontainer);
        var email =  $("<p>", {"class":"email", "value": "that.email"}).text("Email"+" "+ email).appendTo(usercontainer);
        var deletebutton = $("<button/>", {"class":"delete"}).text("Delete").appendTo(usercontainer);
      } else {
      alert("Please check your email");
      }
    } else {
      alert("Check your username");
      // }
    };
  });  
};
ContactManager.prototype.deletebutton = function() {
  var $this = $(this);
  var $usercontact = $('#usercontact')
  $usercontact.on( "click", ".delete", function() {
    $(this).parent().remove();
  });

};

ContactManager.prototype.getSearchInput = function() {
  var that = this;
  var search = $('#search')
  search.keyup(function()  {
    var searchInput = $(this).val()
    that.filterSearch(searchInput)
  });
}

ContactManager.prototype.filterSearch = function(searchInput) {
  if (searchInput.trim() == "") {
    $(usercontact).show();
  } else {
   $(".contactinfo").hide();
   $("[class^='" + searchInput + "']").parent().show();
  }
}

ContactManager.prototype.init= function () {
  this.deletebutton();
  this.display(); 
  this.getSearchInput();
};
$(document).ready(function() {
  var contactmanager = new ContactManager();
  contactmanager.init()
})
