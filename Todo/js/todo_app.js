function TodoApp() {
  this.users = [];// an array of users with their corresponding todo items
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
  // console.log(this.users);
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
  // console.log("username: " + username);
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
  console.log(returnVal);
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
  console.log("user click: " + inputtext);
  if (this.checkEmptyField(inputtext) && (this.doesUserExist(inputtext) == false) ) {
      this.addUser(inputtext);
      $("#createtodo").show()
      $("#user").hide();
      this.addToOptionList(inputtext);
      this.addToUserList(inputtext)
      console.log(this.users);
  }
}

TodoApp.prototype.addToUserList = function(username) {
  $("<h4/>" ,{"value":$(".username").val(), "class":username}).html(username + "(<span class = username>" + this.updateCount(username) + ")</span>").appendTo($("#userlist"));
}

TodoApp.prototype.createTodoListClick = function() {
   var username = $("#select option:selected").text();
   var todo_text = $(".todo").val()
   console.log("todo text: " + todo_text);

   this.addToTodoList(username, todo_text);
   console.log(this.users);
 }


TodoApp.prototype.addEventHandlers = function() {
  var that = this;
  console.log(this.user)
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
  })
  this.handlecheckbox()
}

// TodoApp.prototype.saveEvents = function () {
//   var that = this;

//   // var todoevent = $(".todo").val()
//   var selectedvalue = $("#select option:selected").text();
//   that.assignee.push($("#select option:selected").text());//set the user into 

//   $("<input/>", {"name":"todo" ,"type": "checkbox"}).appendTo($("#todolist"));
//   $("<p/>", {"class": "eventdone"}).text($(".todo").val() +" "+"assigned by  ("+ that.assignee[that.assignee.length-1]+")").appendTo($("#todolist"));
//    var count = that.countElement(that.assignee[that.assignee.length-1], that.assignee); 
//     $("."+selectedvalue).text(selectedvalue +"(" + count + ")");
  
//     $("#todo").hide(); 
  
// }

TodoApp.prototype.toDobuttonHandler = function () {
  var that = this;
  this.handlecheckbox();
  this.hideuser();
 
}

TodoApp.prototype.checkboxToUpdateCounter= function() {
  
}


//handle checkbox 
TodoApp.prototype.handlecheckbox = function () {
  var that = this;
  $("#todolist").on("click", "input[type=checkbox]", function(){
    if ($(this).is(":checked")) {
      // console.log($(this));

      $(this).next().addClass('highlight')
      var getid =$(this).next().attr("name")
      
      var count = that.updateCount(getid) -1
      // console.log(count)
      $("."+ getid + " .username ").text(count+")")
    } else {
      $(this).next().removeClass('highlight')
      var getid =$(this).next().attr("name")
      // console.log(count)
      var count = that.updateCount(getid) 
      $("."+ getid + " .username ").text(count+")")
    }
  })

}



$(document).ready(function() {
  var todo = new TodoApp()
  todo.init()
})