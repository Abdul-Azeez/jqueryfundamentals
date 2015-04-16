function ContactManager(container) {
  this.container = $("#" + container);
};

var REGEX = {
  email: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
}
Object.freeze(REGEX)

ContactManager.prototype.validateEmail = function() {
  var regex = REGEX.email;
  var match = regex.test($('.email').val());
  if (!match){
    alert("Please check your email")
  }
  return match;
};
ContactManager.prototype.checkEmptyField = function() {
  if(($('.name').val()).trim() == "" ) {
    alert("Name Field doesn't have to be empty.")
    return false
  } else {
    return true;
    } 
};
ContactManager.prototype.display = function() {
  var that = this;
  $('#add').click(function() { 
    if (that.checkEmptyField() && (that.validateEmail()) ) {
      that.addContainer();
    };
  });  
};

ContactManager.prototype.addContainer = function() {
  var contactContainer = $("<div/>", {"class": "contactinfo"}).appendTo(this.container);
  var name = $('.name')
  var email = $('.email')
   $("<p>", {"value":name.val(),"class":name.val() }).text("Name:"+ "  "+name.val()).appendTo(contactContainer);
   $("<p>", {"value": "email"}).text("Email:"+" "+ email.val()).appendTo(contactContainer);
   $("<button/>", {"class":"delete"}).text("Delete").appendTo(contactContainer);
  name = $('.name').val("");
  email = $('.email').val("");

}
ContactManager.prototype.deleteContainer = function() {
  var $this = $(this);
  var $usercontact = $('#usercontact')
  $usercontact.on( "click", ".delete", function() {
    $(this).parent().remove();
  });
};

ContactManager.prototype.getSearchInput = function() {
  var that = this;
  $('#search').keyup(function()  {
    that.filterSearch($(this).val())
  });
}

ContactManager.prototype.filterSearch = function(searchInput) {
  if (searchInput.trim() == "") {
    $('.contactinfo').show();
    $(usercontact).show();
  } else {
   $(".contactinfo").hide();
   $("[value^='" + searchInput + "']").parent().show();
  }
}

ContactManager.prototype.init= function () {
  this.deleteContainer();
  this.display(); 
  this.getSearchInput();
};

$(document).ready(function() {
  var contactmanager = new ContactManager("usercontact");
  contactmanager.init()
})
