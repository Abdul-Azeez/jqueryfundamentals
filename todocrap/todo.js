function CreateTodo() {
  this.count = 0;
  this.list = [];
  this.enventscount = 0
};

CreateTodo.prototype.createUser = function (number) {
$("#createuser").click(function () {
  $("<br/>").appendTo($(".user")); 
  var container =$("<div/>", {"class": "inputcontainer"}).appendTo($(".user")); 
 label= $("<label/>", {"value":"Name"}).html("Name").appendTo(container );
  inputbutton = $("<input/>", {"class":"username", "type":"text"}).appendTo(container );
  addbutton = $("<button/>", { "class": "addbutton"}).html("ADD").appendTo(container );
  })
}

CreateTodo.prototype.checkEmptyField = function(name) {
  if(name.val().trim() == "" ) {
    alert("Name Field doesn't have to be empty.")
    return false
  } else {
    return true;
    } 
};
CreateTodo.prototype.isNameUnique = function (user, arrayfield) {
  if($.inArray(user.lowercase(), myarray) != -1) {
    alert('This user already exists.');
    return false; 
  } else {
    return true;
 }
}

CreateTodo.prototype.addEventHandler = function() {

}

CreateTodo.prototype.addUser = function () {
  $(".user").on("click", ".addbutton",  function() {
    $("<h4/>" ,{"value":$(".username").val()}).text($(".username").val()).appendTo($("#list"));
    $(".inputcontainer").empty()
    if ($("#userbutton").find("button").length < 2) {
      $("<button/>", {"class": "createtodo"}).html("Create to do").appendTo($("#userbutton"))
      $("#createuser").show()
    }
  })
};

CreateTodo.prototype.saveEvents = function () {

}

CreateTodo.prototype.toDobuttonHandler = function () {
  $(".user").on("click", ".createtodo", function () {
   var label= $("<label/>", {"value":"Name"}).html("To Do  ").appendTo($("#todo") );
   var inputbutton = $("<input/>", {"class":"event", "type":"text"}).appendTo($("#todo"));
   var select = $("<select/>", {"id": "select"}).appendTo($("#todo")); 
   var input = $("#list").find("h4");
   if (input.length > 0 ) {
    for (var i = 0; i < input.length; i++)  {
        $("<option/>", {"id": "option", "values": "Gbenga"}).html(input.eq(i).text()).appendTo(select);
      }
     $("<button/>", { "class": "savebutton"}).html("Save").appendTo($("#todo"));
     $("<br/>").appendTo($("#todo"));
    };
  })
}

CreateTodo.prototype.saveUser = function() {
  var that = $(this)
  $("#todo").on("click", ".savebutton", function() {
    $("<label/>", {"id":"basket"}).appendTo($("#todo"));
    var event1 =$('.event').val();
    // console.log(event1);
    var assignee = $("#select option:selected").text();
    $("<input/>", {"class":"eventdone" ,"type": "checkbox"}).appendTo($("#basket"));
    $("<p/>", {"class": "eventdone"}).text(event1 +" "+"assigned by  ("+ assignee+")").appendTo($("#basket")); 
  })
};

CreateTodo.prototype.clickedCheckBox = function () {
  $("todo").on("click",".savebutton")

}

CreateTodo.prototype.init = function () {
  this.createUser();
  this.addUser();
  this.toDobuttonHandler();
  this.saveUser();
  // $('#createuser').hide()
}

$(document).ready(function() {
  var createTodo = new CreateTodo()
  createTodo.init()
})