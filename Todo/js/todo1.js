function CreateTodo() {
  this.count = 0;
  this.list = [];
  this.assignee=[];
  this.enventscount = 0
};

//when create user is clicked
CreateTodo.prototype.createUser = function () {
  $("#createuser").click(function () {
    $("<br/>").appendTo($(".user")); 
    $("#user").show();
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

CreateTodo.prototype.addEventHandler = function() {
  $("")
}

//counts how many times the elements occur in the arrary.
CreateTodo.prototype.countElement= function (item,array) {
  var count = 0;
  $.each(array, function(i,v) { if (v === item) count++; });
   return count;
}

//adds user to the User list;
CreateTodo.prototype.addUser = function () {
  var that = this;
  $(".addbutton").click(function () {
  // console.log($("#user .user").val())
  var inputtext = $("#user .user").val()
  // console.log(that.list);
  if (that.checkEmptyField(inputtext) && (that.isNameUnique(inputtext, that.list)) ) {
       that.list.push(inputtext);
       console.log(that.list);
      $("<h4/>", {'class': inputtext}).text(inputtext + "(" +that.count + ")").appendTo($("#userlist"));
      $("#createtodo").show()
       $("#user").hide();
    }
  })
}

// CreateTodo.prototype.addUser = function () {
//   $(".user").on("click", ".addbutton",  function() {
//     $("<h4/>" ,{"value":$(".username").val()}).text($(".username").val()).appendTo($("#list"));
//     $(".inputcontainer").empty()
//     if ($("#userbutton").find("button").length < 2) {
//       $("<button/>", {"class": "createtodo"}).html("Create to do").appendTo($("#userbutton"))
//       $("#createuser").show()
//     }
//   })
// };

CreateTodo.prototype.saveEvents = function () {
  var that = this;
  $("#save").click(function () {
    // var todoevent = $(".todo").val()
    var selectedvalue = $("#select option:selected").text();
    that.assignee.push($("#select option:selected").text());
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
  $("#createtodo").click(function () {
    for (var i = 0; i < that.list.length; i++)  {
      console.log(that.list[i])
       if (that.countElement(that.list[i], that.list) < 2) {
        $("<option/>", {"id": "option"}).html(that.list[i]).appendTo($("#select"));
        $("#todo").show();
       }
    }
  })
}

CreateTodo.prototype.saveUser = function() {
  var that = $(this)
  $("#todo").on("click", ".savebutton", function() {
    $("<label/>", {"id":"basket"}).appendTo($("#todo"));
    var event1 =$('.event').val();
    var assignee = $("#select option:selected").text();
  })
};

//handle checkbox 
CreateTodo.prototype.handlecheckbox = function () {
  var that = this;
  $("#todolist").on("click", "input[type=checkbox]", function(){
    if ($(this).is(":checked")) {
      console.log($(this));
      $(this).next().addClass('highlight')
      // $('.eventdone').replaceTag('<del>', true); 

    } else {
      $(this).next().removeClass('highlight')
    }
  })

}

CreateTodo.prototype.clickedCheckBox = function () {
  // $("todo").on("click",".savebutton")
}

CreateTodo.prototype.countEvents = function () {

}

// initialize
CreateTodo.prototype.init = function () {
  this.createUser();
  this.addUser();
  this.toDobuttonHandler();
  this.saveUser();
  this.hidetodo();
  this.hideuser();
  this.saveEvents();
  this.handlecheckbox();
  $('#createtodo').hide()
  $('#user').hide()
  $('#todo').hide()
}

$(document).ready(function() {
  var createTodo = new CreateTodo()
  createTodo.init()
})