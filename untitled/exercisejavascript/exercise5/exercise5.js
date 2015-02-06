function User() {
  this.firstname = prompt("Please enter your first name", "");
  this.lastname = prompt("Please enter ur last name","");

}



User.prototype.collectUser = function(firstname, lastname) {
  firstname = this.firstname;
  lastname = this.lastname;

}

User.prototype.validate = function(e) {
                    switch(e && e.trim()) {
                        case "":
                        case 0:
                        case "0":
                        case null:
                        case false:
                        case typeof this == "undefined":
                            return true;
                                default : return false;
                    }
                }

User.prototype.print = function () {

  if (this.validate(this.firstname) == true) { 
    alert("firstname doesn't have to be empty")
      }
  if (this.validate(this.lastname) == true) {
    alert("lastname doesn't have to be empty")
  }

  else {
     document.getElementById("demo").innerHTML =
        "Hello " + this.firstname +" "+ this.lastname;
  }

}

var user1 = new User()

user1.print()
