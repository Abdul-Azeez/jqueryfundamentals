function CreateTodo() {
  this.count = 0;
  this.list = [];
  this.assignee=[];
  this.enventscount = 0
};

//when create user is clicked
CreateTodo.prototype.createUserClick = function () {
  $("<br/>").appendTo($(".user")); 
  $("#user").show();
}

CreateTodo.prototype.addToAssigneeList = function(new_user) {
  this.list.push(new_user);
  $("<option/>", {"id": new_user }).html(new_user).appendTo($("#select"));

  $("<h4/>", {'class': new_user}).text(new_user + "(" + this.count + ")").appendTo($("#userlist"));
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


//counts how many times the elements occur in the arrary.
CreateTodo.prototype.countElement= function (item,array) {
  var count = 0;
  $.each(array, function(i,v) { if (v === item) count++; });
   return count;
}

//adds user to the User list;
CreateTodo.prototype.addUserClick = function () {
  var inputtext = $("#user .user").val().trim();
  if (this.checkEmptyField(inputtext) && (this.isNameUnique(inputtext, this.list)) ) {
      console.log(this.list);
      this.addToAssigneeList(inputtext);
      $("#createtodo").show()
      $("#user").hide();
      this.saveEvents()
    }
  
}

CreateTodo.prototype.addEventHandlers = function() {
  var that = this;

  //handles addUser button event
  $(".addbutton").click(function () {
    that.addUserClick();
  });

  $("#createuser").click(function () {
    that.createUserClick();
  });

   $("#createtodo").click(function () {
    $("#todo").show(); //make the todo-list visible
  })
}

CreateTodo.prototype.saveEvents = function () {
  var that = this;
  $("#save").click(function () {
    // var todoevent = $(".todo").val()
    var selectedvalue = $("#select option:selected").text();
    that.assignee.push($("#select option:selected").text());//set the user into 

    $("<input/>", {"name":"todo" ,"type": "checkbox"}).appendTo($("#todolist"));
    $("<p/>", {"class": "eventdone"}).text($(".todo").val() +" "+"assigned by  ("+ that.assignee[that.assignee.length-1]+")").appendTo($("#todolist"));
    var count = that.countElement(that.assignee[that.assignee.length-1], that.assignee); 
    $("."+selectedvalue).text(selectedvalue +"(" +count + ")");
  
    $("#todo").hide(); 
  })
}

CreateTodo.prototype.increaseCount = function() {
  var that = this; 

}

CreateTodo.prototype.toDobuttonHandler = function () {
  var that = this;
  this.handlecheckbox();
  this.hideuser();
 
}

// CreateTodo.prototype.saveUser = function() {
//   var that = $(this)
//   $("#todo").on("click", ".savebutton", function() {
//     $("<label/>", {"id":"basket"}).appendTo($("#todo"));
//     var event1 =$('.event').val();
//     var assignee = $("#select option:selected").text();
//   })
// };

//handle checkbox 
CreateTodo.prototype.handlecheckbox = function () {
  var that = this;
  $("#todolist").on("click", "input[type=checkbox]", function(){
    if ($(this).is(":checked")) {
      console.log($(this));
      $(this).next().addClass('highlight')
    } else {
      $(this).next().removeClass('highlight')
    }
  })

}

// initialize
CreateTodo.prototype.init = function () {
  this.toDobuttonHandler();
  this.addEventHandlers()
  // this.saveUser();
  // this.hidetodo();
  // this.hideuser();
  // this.saveEvents();
  // this.handlecheckbox();
  $('#createtodo').hide()
  $('#user').hide()
  $('#todo').hide()
}

$(document).ready(function() {
  var createTodo = new CreateTodo()
  createTodo.init()
})