function CreateTodo() {
  this.count = 0;
  this.list = [];
  this.assignee=[];
  this.enventscount = 0
};

//when create user is clicked
CreateTodo.prototype.createUser = function () {
  var that = this
  this.hidetodo();
  $("#createuser").click(function () {
    $("<br/>").appendTo($(".user")); 
    $("#user").show();
    that.addUser()
  })
}


// initialize
CreateTodo.prototype.init = function () {
  $('#createtodo').hide()
  $('#user').hide()
  $('#todo').hide()
}

$(document).ready(function() {
  var createTodo = new CreateTodo()
  createTodo.init()
})