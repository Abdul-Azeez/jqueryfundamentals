function ContactManager() {
  // this.name = $('.name').val();
  // this.email = $('.email').val();
  this.num = 0;
};

ContactManager.prototype.validateEmail = function() {
  var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
  var email = $('.email').val();
  var match = regex.test(email);
  if (match == false) {
    // alert("Please use proper email"
    return false
  } else {
    // console.log("true")
    return true;
  } 
};
ContactManager.prototype.validateName = function() {
  var name = $('.name').val();
  if(name.trim() == "" ) {
    return false
  } else {
    // console.log("true")
    return true;
    } 
};

ContactManager.prototype.display = function() {
  var num = 0
  var addbutton= $('#add');
  var that = this;
  value = this.validateName()
  alert(value)
  addbutton.click(function(num) { 
    if (that.validateName()==true) {
      if (that.validateEmail()==true) {
        var usercontainer = $("<div/>", {"class": "contactinfo"}).appendTo("#usercontact");
        var name = $('.name').val();
        var email = $('.email').val();
        var username = $("<p>", {"class":"name", "value":"that.name"}).text("Name"+ "  "+name).appendTo(usercontainer);
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
  var that = this;
  // $('.delete').click(function () {
  //   that.closest('div').remove();
  // });
 var $button = $('button')
 alert("delete is here")
  $button.delegate(".delete", "click", function() {
    alert("i have been clicked")
    (that).closest("div").remove();
  });

};

ContactManager.prototype.filterSearch = function() {
 $.ajax({
    url: ".html",
    context: document.bod
  }).done(function() {
  $( this ).addClass( "done" );
    });
}
ContactManager.prototype.getcontact= function () {
}

ContactManager.prototype.init= function () {
  this.deletebutton();
  this.display(); 
  
};
$(document).ready(function() {
  var contactmanager = new ContactManager();
  contactmanager.init()
})
