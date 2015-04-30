function TodoApp() {
  this.users = [];// an array of users with their corresponding todo items
  this.handlecount = [];
  this.checkeduser =[];
}

TodoApp.prototype.init = function() {
  // this.getTodoCount(getUser("segun"));
  this.addEventHandlers();
  $('#TodoApp').hide()
  $('#createtodo').hide();
  $('#user').hide()
  $('#todo').hide()
}


TodoApp.prototype.addUser = function(user_name) {
  var new_user = new TodoUser(user_name);
  this.users.push(new_user);
}

TodoApp.prototype.addItem = function(username, item_text) {
  var assignee = this.getUser(username)
  assignee.todoList.push(item_text);
}

TodoApp.prototype.getUser = function(username){
  var user = this.users.filter(function(user, index, array){
    return user.name == username;
  });
  return user;

}


TodoApp.prototype.getTodoCount = function(username) { 
  var user = this.getUser(username);
  return user[0].todoList.length;
}

//when create user is clicked
TodoApp.prototype.createUserClick = function () {
  $("<br/>").appendTo($(".user")); 
  $("#user").show();
}

TodoApp.prototype.addToOptionList = function(new_user) {
  // this.user.push(new_user);
  $("<option/>", {"id": new_user }).html(new_user).appendTo($("#select"));
}

TodoApp.prototype.addToTodoList = function(username, todolisttext) {
  this.getUser(username)[0].todoList.push(todolisttext);
$("<input/>", {"name":"todo" ,"type": "checkbox"}).appendTo($("#todolist"));
$("<p/>", {"class": "eventdone", "name": username}).text(todolisttext +" "+"assigned by  ("+ username +")").appendTo($("#todolist"))
var count = this.updateCount(username)
$("."+ username + " .username ").text(count+")")
}

// Checks for null input strings
TodoApp.prototype.checkEmptyField = function(name) {
  if(name.trim() == "" ) {
    alert("Name Field doesn't have to be empty.")
    return false
  } else {
    return true;
    } 
};

TodoApp.prototype.updateCount = function(username) {
  var user = this.getUser(username);
  return user[0].todoList.length;
}
//To check if the element is not in the array before
TodoApp.prototype.doesUserExist = function (username) {
  var returnVal = this.getUser(username).length > 0 ? true : false;
  return returnVal

}

//hides user when field when create to do is clicked
TodoApp.prototype.hideuser = function () {
  $("#createtodo").click(function () {
    if ($("#user:visible")) {
      $("#user").hide()
    }
  }); 
  }

  // hides to do when create user is clicked.
  TodoApp.prototype.hidetodo = function () {
  $("#createuser").click(function () {
    if ($("#todo:visible")) {
      $("#todo").hide()
    }
    }); 
  }

//adds user to the User list;
TodoApp.prototype.addUserClick = function () {
  var inputtext = $("#user .user").val().trim();
  if (this.checkEmptyField(inputtext) && (this.doesUserExist(inputtext) == false) ) {
      this.addUser(inputtext);
      $("#createtodo").show()
      $("#user").hide();
      this.addToOptionList(inputtext);
      this.addToUserList(inputtext)
  }
}

TodoApp.prototype.addToUserList = function(username) {
  $("<h4/>" ,{"value":$(".username").val(), "class":username}).html(username + "(<span class = username>" + this.updateCount(username) + ")</span>").appendTo($("#userlist"));
}

TodoApp.prototype.createTodoListClick = function() {
   var username = $("#select option:selected").text();
   var todo_text = $(".todo").val()
   this.addToTodoList(username, todo_text);
 }


TodoApp.prototype.addEventHandlers = function() {
  var that = this;
  //handles addUser button event
  $(".addbutton").click(function () {
    that.addUserClick();
  });

  $("#createuser").click(function () {
    that.createUserClick();
    that.hidetodo()
  });

  $("#createtodo").click(function () {
    $("#todo").show(); //make the todo-list visible
    that.hideuser()
  });

  $("#save").click(function () {
    that.createTodoListClick();
     $("#todo").hide();
  })
  this.handlecheckbox()
}

TodoApp.prototype.toDobuttonHandler = function () {
  var that = this;
  this.handlecheckbox();
  this.hideuser();
}
TodoApp.prototype.isNameUnique = function (user, arrayfield) {
  if($.inArray(user, arrayfield) == -1) {
    // alert('This user already exists.');
    return false; 
  } else {
    return true;
 }
}

TodoApp.prototype.checkboxToUpdateCounter= function() {
  var n = $( "input:checked" ).length;
  return n;
}


//handle checkbox 
TodoApp.prototype.handlecheckbox = function () {
  var that = this;

  $("#todolist").on("click", "input[type=checkbox]", function(){
    if ($(this).is(":checked")) {
      $(this).next().addClass('highlight')
      var getid =$(this).next().attr("name");
      if (that.isNameUnique(getid, that.checkeduser)==false) {
        that.checkeduser.push(getid);
        that.handlecount.push(that.updateCount(getid));  
        $("."+ getid + " span").text(that.handlecount[indexno]+")")
      } 
      if (that.isNameUnique(getid, that.checkeduser)) {
        var indexno= $.inArray(getid, that.checkeduser);
        that.handlecount[indexno]= that.handlecount[indexno] -1;
        $("."+ getid + " span").text(that.handlecount[indexno]+")")
      };
    } else {
      var getid =$(this).next().attr("name");
      $(this).next().removeClass('highlight')
      var indexno= $.inArray(getid, that.checkeduser);
      that.handlecount[indexno]= that.handlecount[indexno] +1;
      $("."+ getid + " span").text(that.handlecount[indexno]+")")
    }
  })

}

$(document).ready(function() {
  var todo = new TodoApp()
  todo.init()
})