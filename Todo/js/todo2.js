function CreateTodo() {
  this.count = 0;
  this.list = [];
  this.assignee=[];
  this.enventscount = 0
};

//when create user is clicked
CreateTodo.prototype.createUser = function () {
  var that = this
  $("#createuser").click(function () {
    $("<br/>").appendTo($(".user")); 
    $("#user").show();
    that.addUser()
  })
}

//adds user to the User list;
CreateTodo.prototype.addUser = function () {
  var that = this;
  $(".addbutton").click(function () {
  var inputtext = $("#user .user").val()
  if (that.checkEmptyField(inputtext) && (that.isNameUnique(inputtext, that.list)) ) {
       that.list.push(inputtext);
       console.log(that.list);
      $("<h4/>", {'class': inputtext}).text(inputtext + "(" +that.count + ")").appendTo($("#userlist"));
      $("#createtodo").show()
       $("#user").hide();
       // that.saveEvents()
    }
  })
}

// Checks for null input strings
CreateTodo.prototype.checkEmptyField = function(name) {
  if(name.trim() == "" ) {
    alert("Name Field doesn't have to be empty.")
    return false
  } else {
    return true;
    } 
};

//To check if the element is not in the array before
CreateTodo.prototype.isNameUnique = function (user, arrayfield) {
  if($.inArray(user, arrayfield) != -1) {
    alert('This user already exists.');
    return false; 
  } else {
    return true;
 }
}

//hides user when field when create to do is clicked
CreateTodo.prototype.hideuser = function () {
  $("#createtodo").click(function () {
    if ($("#user:visible")) {
      $("#user").hide()
    }
  }); 
  }

  // hides to do when create user is clicked.
  CreateTodo.prototype.hidetodo = function () {
  $("#createuser").click(function () {
    if ($("#todo:visible")) {
      $("#todo").hide()
    }
    }); 
  }

// initialize
CreateTodo.prototype.init = function () {
  this.createUser();
  $('#createtodo').hide()
  $('#user').hide()
  $('#todo').hide()
  this.hidetodo();
  this.hideuser();
}

$(document).ready(function() {
  var createTodo = new CreateTodo()
  createTodo.init()
})